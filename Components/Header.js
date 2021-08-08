import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  LockClosedIcon,
  XIcon,
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
  const [showSearchbar, setShowSearchbar] = useState(false);

  const router = useRouter();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(router);
    router?.pathname === "/search" && setIsScrolled(true);
  }, [isScrolled]);
  const handleScroll = () => {
    window.scrollY > 120 ? setIsScrolled(true) : setIsScrolled(false);
  };
  const handleReset = () => {
    setShowSearchbar(false);
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
    setIsScrolled(false);
  };
  return (
    <div
      className={`${
        isScrolled ||
        showSearchbar ||
        input.length ||
        router?.pathname === "/search"
          ? "bg-white"
          : "bg-transparent"
      } sticky top-0 z-50 grid grid-cols-3 px-5 md:px-8 w-full py-2 shadow-lg items-center `}
    >
      {/* Left Side */}
      {!showSearchbar && (
        <Link href="/">
          <div
            className="h-10 w-36 relative flex-shrink"
            onClick={() => router.push("/")}
          >
            <Image
              src="https://links.papareact.com/qd3"
              alt="air bnb logo"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
              className="cursor-pointer"
            />
          </div>
        </Link>
      )}
      {/* Middle Side  */}
      <div
        className={`flex   ${
          showSearchbar ? "col-span-3 bg-white " : "col-span-`"
        }`}
      >
        {showSearchbar ? (
          <div className="w-full  col-span-3 items-center flex justify-between">
            <div className=" items-center w-[90%]  inline-flex">
              <input
                type="text"
                className="border hover:shadow-md focus:shadow-md w-full p-3 px-4  rounded-full outline-none flex-grow"
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
            <XIcon className="h-5 text-xl" onClick={handleReset}>
              X
            </XIcon>
          </div>
        ) : (
          // <>
          <div className=" items-center w-full flex-grow md:inline-flex hidden">
            <input
              type="text"
              className="border hover:shadow-md focus:shadow-md w-full p-3 px-4  rounded-full outline-none flex-grow"
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

          // </>
        )}
      </div>
      {/* Right Side */}
      {!showSearchbar && (
        <div className="flex  justify-self-end items-center md:space-x-6 ">
          <div className=" justify-end items-center w-full md:hidden inline-flex">
            {" "}
            <SearchIcon
              onClick={() => setShowSearchbar(true)}
              className="cursor-pointer h-7 items-center mr-2 text-white bg-red-400 p-2 rounded-full "
            />
          </div>
          <p
            className={`${
              isScrolled ? "text-gray-500" : "text-white"
            } hidden sm:block text-sm hover:bg-gray-600 p-1 cursor-pointer hover:text-gray-50 rounded-full `}
          >
            Become a host
          </p>
          <div className="flex justify-center items-center border rounded-full p-2">
            <MenuIcon
              className={`${
                isScrolled ? "text-gray-500" : "text-white"
              } h-3 sm:h-6  cursor-pointer`}
            />
            <UserCircleIcon
              className={`${
                isScrolled ? "text-gray-500" : "text-white"
              } h-3 sm:h-6  cursor-pointer`}
            />
          </div>
        </div>
      )}
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
