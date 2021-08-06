import Image from "next/image";
import React from "react";

const SmallCards = ({ item: { img, location, distance } }) => {
  return (
    <div className="flex cursor-pointer hover:bg-gray-300 rounded-xl space-x-4 m-2 mt-5 hover:scale-105 transition transform duration-100 ease-out">
      <div className="h-14 w-14 relative">
        <Image src={img} layout="fill" className="rounded-lg " />
      </div>
      <div >
        <p className="text-lg">{location}</p>
        <p className="text-gray-500">{distance}</p>
      </div>
    </div>
  );
};

export default SmallCards;
