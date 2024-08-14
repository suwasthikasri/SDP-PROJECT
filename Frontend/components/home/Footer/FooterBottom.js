import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <div className="w-full bg-[#F5F5F3] group" style={{ backgroundColor: '#b6d1b8 ' }}

    >
      <div className="max-w-container mx-auto border-t-[1px] pt-10 pb-20">
        <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          Copyright 2024 |  Delightful Delivers | All Rights Reserved |
          <a href="https://www.linkedin.com/in/suwasthika-sri-k-v-vijayakumar1925/" target="_blank" rel="noreferrer">
            <span className="ml-1 font-medium group-hover:text-primeColor">
              let's do it.
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
