import Image from "next/image";
import React from "react";

const MediumCard = ({ data: { title, img } }) => {
  return (
    <div className="text-left mt-3 cursor-pointer hover:scale-105 transform transition duration-300 ease-out" >
      <div className="relative h-80 w-80 mx-3">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h2 className="font-semibold text-lg py-3 pl-3">{title}</h2>
    </div>
  );
};

export default MediumCard;
