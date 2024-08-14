import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdSwitchAccount } from "react-icons/md";
import { useSelector } from "react-redux";

const SpecialCase = () => {
  const [showProfile, setShowProfile] = useState(false);
  const products = useSelector((state) => state.orebiReducer.products);
  const user = useSelector((state) => state.userReducer?.user || {}); // Safe access with default empty object

  return (
    <div className="fixed top-52 right-2 z-20 hidden md:flex flex-col gap-2">
      {/* Profile Button */}
      <div
        onClick={() => setShowProfile(!showProfile)}
        className="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer relative"
      >
        <div className="flex justify-center items-center">
          <MdSwitchAccount className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
          <MdSwitchAccount className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
        </div>
        <p className="text-xs font-semibold font-titleFont">Profile</p>
      </div>

      {/* Cart Button */}
      <Link to="/cart">
        <div className="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer relative">
          <div className="flex justify-center items-center">
            <RiShoppingCart2Fill className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
            <RiShoppingCart2Fill className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
          </div>
          <p className="text-xs font-semibold font-titleFont">Buy Now</p>
          {products.length > 0 && (
            <p className="absolute top-1 right-2 bg-primeColor text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
              {products.length}
            </p>
          )}
        </div>
      </Link>

      {/* Profile Details */}
      {showProfile && (
        <div
          className="absolute right-0 top-20 w-80 p-4 bg-white shadow-lg rounded-lg"
          style={{ zIndex: 30 }}
        >
          <h2 className="text-xl font-semibold mb-2">Profile Details</h2>
          {user ? (
            <div>
              <p><strong>Name:</strong> {user.clientName || "N/A"}</p>
              <p><strong>Email:</strong> {user.email || "N/A"}</p>
              <p><strong>Phone:</strong> {user.phone || "N/A"}</p>
              <p><strong>Address:</strong> {user.address || "N/A"}</p>
              <p><strong>City:</strong> {user.city || "N/A"}</p>
              <p><strong>Country:</strong> {user.country || "N/A"}</p>
              <p><strong>ZIP:</strong> {user.zip || "N/A"}</p>
            </div>
          ) : (
            <p>No user data available</p>
          )}
          <button
            onClick={() => setShowProfile(false)}
            className="mt-4 bg-primeColor text-white px-4 py-2 rounded-md hover:bg-black duration-300"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default SpecialCase;
