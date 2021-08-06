import Image from "next/image";
import React from "react";
import {StarIcon} from "@heroicons/react/solid";
const InfoCard = ({
  data: { img, description, price, star, title, total },
}) => {
  return (
    <div className="pt-5 h-[550px] sm:h-full  rounded-xl px-1 flex flex-col sm:flex-row w-full space-x-4 border-b hover:shadow-md transition transform duration-500 ease-out cursor-pointer hover:opacity-75">
      <div className="relative h-64 sm:h-80 w-full sm:w-96 rounded-xl col-span-1 ">
        <Image src={img} layout={"fill"} className="rounded-xl" />
      </div>
      <div className="py-3 space-y-3 relative w-full">
        <p className="text-xl">Private room in center of London</p>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <h2 className="text-gray-500">{description}</h2>
        <div className=" absolute -bottom-10 sm:bottom-5 left-0  px-5 w-full flex justify-between items-center">
          <span className="flex items-center">
            <StarIcon  className="h-6 text-red-400" /> {star}
          </span>
          <p className="text-2xl font-semibold">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
