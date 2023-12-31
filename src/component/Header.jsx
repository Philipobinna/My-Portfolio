/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {  Profile } from "../assets";

const Header = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 2xl:gap-20 py-20">
      <div className="flex flex-col mb-20 lg:mb-0">
        <span className="text-lg font-bold text-orange-700">
          PHILIP OBINNAKWELU
        </span>
        <div className="flex gap-4 items-center my-4">
          <h1 className="text-gray-800 dark:text-neutral-100 text-5xl 2xl:text-7xl font-bold text-center">
            I'm a
          </h1>
          <div className="flex items-center justify-center text-white shadow-lg bg-blue-800 dark:bg-[#224cff10] dark:text-[#224cff] rounded-full">
            <p className="text-3xl 2xl:text-5xl font-bold py-2 px-5 pb-2 text-center">
              Software Developer
            </p>
          </div>
        </div>
        <h1 className="text-5xl 2xl:text-7xl font-extrabold text-black dark:text-neutral-100 tracking-wider ">
          FULL-STACK ENGINEER
        </h1>
        <p className="text-md text-black dark:text-gray-100 mt-5 2xl:mt-10">
          Full-Stack Web Developer with ability to learn and collaborate in
          rapidly changing environments and compositions.
        </p>
        <div className="mt-10 flex gap-10">
          <button className="bg-orange-700 text-lg text-white font-semibold rounded-md py-3 px-5">
            Hire Me
          </button>
          <a href="#projects">
            <button className="text-lg text-white font-semibold rounded-md py-3 px-5 bg-black dark:bg-[#224cff10]">
              Projects
            </button>
          </a>
        </div>
      </div>
      <div className="w-[320px] h-[320px] md:w-[600px] md:h-[600px] 2xl:w-[700px] 2xl:h-[700px] rounded-full border border-gray-600 dark:border-gray-200 relative md:nt-20 lg:mt-0 flex items-center justify-center">
        <img
          src={Profile}
          className="w-full h-full absolute rounded-full object-cover "
        />
      </div>
    </div>
  );
};

export default Header;
