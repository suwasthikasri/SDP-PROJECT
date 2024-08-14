import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";

import mylogo from "../Account/logo.jpeg";

const SignUp = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [checked, setChecked] = useState(false);

  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errAddress, setErrAddress] = useState("");
  const [errCity, setErrCity] = useState("");
  const [errCountry, setErrCountry] = useState("");
  const [errZip, setErrZip] = useState("");

  const [successMsg, setSuccessMsg] = useState("");

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setErrPhone("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
    setErrAddress("");
  };
  const handleCity = (e) => {
    setCity(e.target.value);
    setErrCity("");
  };
  const handleCountry = (e) => {
    setCountry(e.target.value);
    setErrCountry("");
  };
  const handleZip = (e) => {
    setZip(e.target.value);
    setErrZip("");
  };

  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (checked) {
      if (!clientName) setErrClientName("Enter your name");
      if (!email) setErrEmail("Enter your email");
      else if (!EmailValidation(email)) setErrEmail("Enter a Valid email");
      if (!phone) setErrPhone("Enter your phone number");
      if (!password) setErrPassword("Create a password");
      else if (password.length < 6) setErrPassword("Passwords must be at least 6 characters");
      if (!address) setErrAddress("Enter your address");
      if (!city) setErrCity("Enter your city name");
      if (!country) setErrCountry("Enter the country you are residing");
      if (!zip) setErrZip("Enter the zip code of your area");

      if (
        clientName &&
        email &&
        EmailValidation(email) &&
        phone &&
        password &&
        password.length >= 6 &&
        address &&
        city &&
        country &&
        zip
      ) {
        try {
          const response = await axios.post("http://localhost:8080/api/users", {
            clientName,
            email,
            phone,
            password,
            address,
            city,
            country,
            zip,
          });

          setSuccessMsg(
            `Hello dear ${clientName}, Welcome you to our Admin panel. We received your Sign up request. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`
          );

          // Reset the form
          setClientName("");
          setEmail("");
          setPhone("");
          setPassword("");
          setAddress("");
          setCity("");
          setCountry("");
          setZip("");
        } catch (error) {
          console.error("There was an error creating the user!", error);
        }
      }
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-start" style={{ backgroundColor: '#D5F0C1' }}>
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
          <Link to="/">
            <img src={mylogo} alt="logoImg" className="w-28" />
          </Link>
          <div className="flex flex-col gap-1 -mt-1">
            <h1 className="font-titleFont text-xl font-medium">Get started for free</h1>
            <p className="text-base">Create your account to access more</p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Get started fast with Delightful Delivers
              </span>
              <br />
              Unlock Exclusive Access to Premium Services and Personalized Gifts!
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Access all Our services
              </span>
              <br />
              Seamless Shopping, Special Offers, and Member-Only Benefits!
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Trusted by online Shoppers
              </span>
              <br />
              Enhanced Shopping Experience with Tailored Recommendations and VIP Perks!
            </p>
          </div>

          
          <div className="flex items-center justify-between mt-10">
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              © Delightful Delivers
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Terms
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Privacy
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Security
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
        {successMsg ? (
          <div className="w-[500px]">
            <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">{successMsg}</p>
            <Link to="/signin">
              <button className="w-full h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold 
                tracking-wide hover:bg-black hover:text-white duration-300">
                Sign in
              </button>
            </Link>
          </div>
        ) : (
          <form className="w-full lgl:w-[500px] h-screen flex items-center justify-center">
            <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-start overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
              <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
                Create your account
              </h1>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">Full Name</p>
                  <input
                    onChange={handleName}
                    value={clientName}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal
                                        placeholder:text-gray-400 rounded-md border-[1px] border-gray-400 outline-none focus-visible:border-primeColor text-black"
                    type="text"
                    placeholder="Enter your full name"
                  />
                  {errClientName && <p className="text-red-500 text-sm">{errClientName}</p>}
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">Email</p>
                  <input
                    onChange={handleEmail}
                    value={email}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal placeholder:text-gray-400 rounded-md border-[1px] border-gray-400 outline-none focus-visible:border-primeColor text-black"
                    type="email"
                    placeholder="Enter your email address"
                  />
                  {errEmail && <p className="text-red-500 text-sm">{errEmail}</p>}
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">Phone</p>
                  <input
                    onChange={handlePhone}
                    value={phone}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal placeholder:text-gray-400 rounded-md border-[1px] border-gray-400 outline-none focus-visible:border-primeColor text-black"
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                  {errPhone && <p className="text-red-500 text-sm">{errPhone}</p>}
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">Password</p>
                  <input
                    onChange={handlePassword}
                    value={password}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal placeholder:text-gray-400 rounded-md border-[1px] border-gray-400 outline-none focus-visible:border-primeColor text-black"
                    type="password"
                    placeholder="Create a password"
                  />
                  {errPassword && <p className="text-red-500 text-sm">{errPassword}</p>}
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">Address</p>
                  <input
                    onChange={handleAddress}
                    value={address}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal placeholder:text-gray-400 rounded-md border-[1px] border-gray-400 outline-none focus-visible:border-primeColor text-black"
                    type="text"
                    placeholder="Enter your address"
                  />
                  {errAddress && <p className="text-red-500 text-sm">{errAddress}</p>}
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">City</p>
                  <input
                    onChange={handleCity}
                    value={city}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal placeholder:text-gray-400 rounded-md border-[1px] border-gray-400 outline-none focus-visible:border-primeColor text-black"
                    type="text"
                    placeholder="Enter your city name"
                  />
                  {errCity && <p className="text-red-500 text-sm">{errCity}</p>}
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">Country</p>
                  <input
                    onChange={handleCountry}
                    value={country}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal placeholder:text-gray-400 rounded-md border-[1px] border-gray-400 outline-none focus-visible:border-primeColor text-black"
                    type="text"
                    placeholder="Enter your country"
                  />
                  {errCountry && <p className="text-red-500 text-sm">{errCountry}</p>}
                </div>

                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">Zip Code</p>
                  <input
                    onChange={handleZip}
                    value={zip}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal placeholder:text-gray-400 rounded-md border-[1px] border-gray-400 outline-none focus-visible:border-primeColor text-black"
                    type="text"
                    placeholder="Enter your zip code"
                  />
                  {errZip && <p className="text-red-500 text-sm">{errZip}</p>}
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    className="w-4 h-4 cursor-pointer"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                    I agree to the Terms and Conditions
                  </label>
                </div>

                <button
                  type="submit"
                  onClick={handleSignUp}
                  className="w-full h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold tracking-wide hover:bg-black hover:text-white duration-300"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
