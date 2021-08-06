import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import DatePicker from "../Components/DatePicker";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [isScrolled]);
  const handleScroll = () => {
    window.scrollY > 120 ? setIsScrolled(true) : setIsScrolled(false);
  };
  const handleReset = () => {
    
    setInput("");
  };
  return (
    <div
      className={`${
        isScrolled ? "bg-white" : "bg-gray-50"
      } sticky top-0 z-50 grid grid-cols-3 px-5 md:px-8 w-full py-5 shadow-lg h-auto`}
    >
      <div className="hidden md:block">
        <Image
          src="https://links.papareact.com/qd3"
          alt="air bnb logo"
          height="100"
          width="100"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className=" flex items-center justify-center w-full col-span-2 md:col-span-1  ">
        <input
          type="text"
          className="border hover:shadow-md focus:shadow-md w-full p-3 px-4  rounded-full outline-none"
          placeholder="Search here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="-ml-10">
          <SearchIcon className="cursor-pointer h-8 items-center text-white bg-red-400 p-2 rounded-full " />
        </div>
      </div>
      <div className="flex  justify-end col-span-1  w-full items-center  md:space-x-8">
        <p className="text-gray-500  text-sm hover:bg-gray-600 p-1 cursor-pointer hover:text-gray-50 rounded-full ">
          Become a host
        </p>
        <GlobeAltIcon className="h-6 md:block hidden text-gray-400 cursor-pointer " />
        <div className="flex justify-center items-center border rounded-full p-2">
          <MenuIcon className="h-3 sm:h-6 text-gray-400 cursor-pointer" />
          <UserCircleIcon className="h-3 sm:h-6 text-gray-400 cursor-pointer" />
        </div>
      </div>
      {input.length ? <DatePicker handleReset={handleReset} /> : ""}
    </div>
  );
};

export default Header;
