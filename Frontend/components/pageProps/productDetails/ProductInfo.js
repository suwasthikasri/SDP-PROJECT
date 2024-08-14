// import React from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../../redux/orebiSlice";
// import axios from 'axios';
// import  { useState, useEffect } from 'react';

// const ProductInfo = ({ productInfo }) => {
//   const highlightStyle = {
//     color: "#d0121a", // Change this to the desired color
//     fontWeight: "bold", // Change this to the desired font weight
//   };
//   const [productData, setProductData] = useState([]);
//   useEffect(() => {
//     // Fetch product data from API
//     const fetchProductData = async () => {
//         try {
//             const response = await axios.get('http://localhost:3000/api/products'); // Replace with your API endpoint
//             setProductData(response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     fetchProductData();
// }, []);


//   const renderDescription = () => {
//     if (!productInfo.des) {
//       return null; // or handle accordingly if product.des is not defined
//     }

//     const description = productInfo.des.split(/:(.*?)-/).map((part, index) => {
//       return (
//         <span key={index} style={index % 2 === 1 ? highlightStyle : {}}>
//           {part}
//         </span>
//       );
//     });

//     return <>{description}</>;
//   };
//   const dispatch = useDispatch();
//   return (
//     <div className="flex flex-col gap-5">
//       <h2 className="text-4xl font-semibold">{productInfo.productName}</h2>
//       <p className="text-2xl font-semibold">
//         {productInfo.price} Rs.
//         <span className="text-xl font-semibold line-through ml-2">540</span>
//         <span className="text-xs ml-2 inline-flex items-center px-3 py-1 rounded-full bg-green-600 text-white">
//           Save 100
//         </span>
//       </p>
//       <hr />
//       <p className="text-base text-gray-600">{renderDescription()}</p>

//       <div className="flex items-center">
//         <p className="text-sm mr-2"> leave a review </p>

//         <svg
//           className="w-4 h-4 text-yellow-300 ms-1"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="currentColor"
//           viewBox="0 0 22 20"
//         >
//           <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//         </svg>
//         <svg
//           className="w-4 h-4 text-yellow-300 ms-1"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="currentColor"
//           viewBox="0 0 22 20"
//         >
//           <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//         </svg>
//         <svg
//           className="w-4 h-4 text-yellow-300 ms-1"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="currentColor"
//           viewBox="0 0 22 20"
//         >
//           <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//         </svg>
//         <svg
//           className="w-4 h-4 text-yellow-300 ms-1"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="currentColor"
//           viewBox="0 0 22 20"
//         >
//           <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//         </svg>
//         <svg
//           className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="currentColor"
//           viewBox="0 0 22 20"
//         >
//           <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//         </svg>
//       </div>

//       <p className="text-base text-green-600 font-medium">In Stock</p>
//       <p className="font-medium text-lg">
//         <span className="font-normal">Colors:</span> {productInfo.color}
//       </p>
//       <button
//         onClick={() =>
//           dispatch(
//             addToCart({
//               _id: productInfo.id,
//               name: productInfo.productName,
//               quantity: 1,
//               image: productInfo.img,
//               badge: productInfo.badge,
//               price: productInfo.price,
//               colors: productInfo.color,
//             })
//           )
//         }
//         className="w-full py-4 bg-blue-500 hover:bg-blue-600 duration-300 text-white text-lg font-titleFont"
//       >
//         Add to Cart
//       </button>
//       <p className="font-normal text-sm">
//         <span className="text-base font-medium"> Categories:</span> couple
//         collection, Birthday, Women 
//       </p>
//     </div>
//   );
  
// };

// export default ProductInfo;





// // const ProductInfo = ({ productInfo }) => {
// //   const highlightStyle = {
// //     color: "#d0121a", // Change this to the desired color
// //     fontWeight: "bold", // Change this to the desired font weight
// //   };
  

// //   const renderDescription = () => {
// //     if (!productInfo.des) {
// //       return null; // or handle accordingly if product.des is not defined
// //     }

// //     const description = productInfo.des.split(/:(.*?)-/).map((part, index) => {
// //       return (
// //         <span key={index} style={index % 2 === 1 ? highlightStyle : {}}>
// //           {part}
// //         </span>
// //       );
// //     });

// //     return <>{description}</>;
// //   };

// //   const dispatch = useDispatch();

// //   return (
// //     <div className="flex flex-col gap-5">
// //       <h2 className="text-4xl font-semibold">{productInfo.productName}</h2>
// //       <p className="text-2xl font-semibold">
// //         {productInfo.price} Rs.
// //         <span className="text-xl font-semibold line-through ml-2">540</span>
// //         <span className="text-xs ml-2 inline-flex items-center px-3 py-1 rounded-full bg-green-600 text-white">
// //           Save 100
// //         </span>
// //       </p>
// //       <hr />
// //       <p className="text-base text-gray-600">{renderDescription()}</p>

// //       <div className="flex items-center">
// //         <p className="text-sm mr-2">Leave a review</p>
// //         {[...Array(4)].map((_, index) => (
// //           <svg
// //             key={index}
// //             className="w-4 h-4 text-yellow-300 ms-1"
// //             aria-hidden="true"
// //             xmlns="http://www.w3.org/2000/svg"
// //             fill="currentColor"
// //             viewBox="0 0 22 20"
// //           >
// //             <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //           </svg>
// //         ))}
// //         <svg
// //           className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
// //           aria-hidden="true"
// //           xmlns="http://www.w3.org/2000/svg"
// //           fill="currentColor"
// //           viewBox="0 0 22 20"
// //         >
// //           <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
// //         </svg>
// //       </div>

// //       <p className="text-base text-green-600 font-medium">In Stock</p>
// //       <p className="font-medium text-lg">
// //         <span className="font-normal">Colors:</span> {productInfo.color}
// //       </p>
// //       <button
// //         onClick={() =>
// //           dispatch(
// //             addToCart({
// //               _id: productInfo.id,
// //               name: productInfo.productName,
// //               quantity: 1,
// //               image: productInfo.img,
// //               badge: productInfo.badge,
// //               price: productInfo.price,
// //               colors: productInfo.color,
// //             })
// //           )
// //         }
// //         className="w-full py-4 bg-blue-500 hover:bg-blue-600 duration-300 text-white text-lg font-titleFont"
// //       >
// //         Add to Cart
// //       </button>
// //       <p className="font-normal text-sm">
// //         <span className="text-base font-medium">Categories:</span> couple
// //         collection, Birthday, Women
// //       </p>
// //     </div>
// //   );
// // };

// // export default ProductInfo;

import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();

  const highlightStyle = "text-red-600 font-bold"; // Tailwind classes for highlight

  const renderDescription = () => {
    if (!productInfo.des) return null;

    return productInfo.des.split(/:(.*?)-/).map((part, index) => (
      <span key={index} className={index % 2 === 1 ? highlightStyle : ""}>
        {part}
      </span>
    ));
  };

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo.productName}</h2>
      <p className="text-2xl font-semibold">
        {productInfo.price} Rs.
        <span className="text-xl font-semibold line-through ml-2">540</span>
        <span className="text-xs ml-2 inline-flex items-center px-3 py-1 rounded-full bg-green-600 text-white">
          Save 100
        </span>
      </p>
      <hr />
      <p className="text-base text-gray-600">{renderDescription()}</p>
      <div className="flex items-center">
        <p className="text-sm mr-2">Leave a review</p>
        {[...Array(4)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow-300 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
        <svg
          className="w-4 h-4 ms-1 text-gray-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      </div>
      <p className="text-base text-green-600 font-medium">In Stock</p>
      <p className="font-medium text-lg">
        <span className="font-normal">Colors:</span> {productInfo.color}
      </p>
      <button
        onClick={() =>
          dispatch(
            addToCart({
              _id: productInfo.id,
              name: productInfo.productName,
              quantity: 1,
              image: productInfo.img,
              badge: productInfo.badge,
              price: productInfo.price,
              colors: productInfo.color,
            })
          )
        }
        className="w-full py-4 bg-blue-500 hover:bg-blue-600 duration-300 text-white text-lg font-titleFont"
      >
        Add to Cart
      </button>
      <p className="font-normal text-sm">
        <span className="text-base font-medium">Categories:</span> couple
        collection, Birthday, Women
      </p>
    </div>
  );
};

ProductInfo.propTypes = {
  productInfo: PropTypes.shape({
    productName: PropTypes.string,
    price: PropTypes.number,
    des: PropTypes.string,
    color: PropTypes.string,
    id: PropTypes.string,
    img: PropTypes.string,
    badge: PropTypes.bool,
  }).isRequired,
};

export default ProductInfo;
