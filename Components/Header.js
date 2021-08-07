import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import DatePicker from "../Components/DatePicker";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
const Header = ({ placeholder }) => {
  const [isScrolled, setIsScrolled] = useState("");
  const [input, setInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [peoples, setPeoples] = useState(1);

  const router = useRouter();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(router)
  }, [isScrolled]);
  const handleScroll = () => {
    window.scrollY > 120 ? setIsScrolled(true) : setIsScrolled(false);
  };
  const handleReset = () => {
    setInput("");
  };
  const handleSearchRedirect = () => {
    router.push({
      pathname: "/search",
      query: {
        location: input,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        peoples,
      },
    });
    setInput("");
    setIsScrolled(true)
  };
  return (
    <div
      className={`${
        isScrolled || input.length||router?.pathname==="/search" ? "bg-white" : "bg-transparent"
      } sticky top-0 z-50 grid grid-cols-3 px-5 md:px-8 w-full py-5 md:py-0 shadow-lg h-full`}
    >
      <Link href="/">
        <div className="hidden md:block" onClick={() => router.push("/")}>
          <Image
            src="https://links.papareact.com/qd3"
            alt="air bnb logo"
            height="100"
            width="100"
            objectFit="contain"
            objectPosition="left"
            className="cursor-pointer"
          />
        </div>
      </Link>
      <div className=" flex items-center justify-center w-full col-span-2 md:col-span-1  ">
        <input
          type="text"
          className="border hover:shadow-md focus:shadow-md w-full p-3 px-4  rounded-full outline-none"
          placeholder={placeholder ? placeholder : "Search here"}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="-ml-10">
          <SearchIcon
            onClick={handleSearchRedirect}
            className="cursor-pointer h-8 items-center text-white bg-red-400 p-2 rounded-full "
          />
        </div>
      </div>
      <div className="flex  justify-end col-span-1  w-full items-center  md:space-x-8">
        <p className="text-gray-500 hidden sm:block text-sm hover:bg-gray-600 p-1 cursor-pointer hover:text-gray-50 rounded-full ">
          Become a host
        </p>
        <GlobeAltIcon className="h-6 md:block hidden text-gray-400 cursor-pointer " />
        <div className="flex justify-center items-center border rounded-full p-2">
          <MenuIcon className="h-3 sm:h-6 text-gray-400 cursor-pointer" />
          <UserCircleIcon className="h-3 sm:h-6 text-gray-400 cursor-pointer" />
        </div>
      </div>
      {input.length ? (
        <DatePicker
          handleReset={handleReset}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          peoples={peoples}
          setPeoples={setPeoples}
          handleSearchRedirect={handleSearchRedirect}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
