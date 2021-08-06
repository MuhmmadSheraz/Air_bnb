import React from "react";

const Pill = ({ title }) => {
  return <div className="border-gray-400 border text-xs  active:scale-105 whitespace-nowrap sm:text-base px-2 text-center md:px-4 py-2 text-gray-600 hover:shadow-lg cursor-pointer transform transition duration-500 ease-out rounded-full">{title}</div>;
};

export default Pill;
