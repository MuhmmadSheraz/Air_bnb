import Image from "next/image";
import React from "react";

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <div className="relative pb-12 cursor-pointer sm:min-w-[300px] hover:scale-105 transform transition duration-500">
      <div className="relative h-96">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-5 md:left-12 w-64 md:w-80">
        <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
        <p className="text-lg">{description}</p>
        <button className="bg-black text-white p-2 px-3  rounded-lg mt-2">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default LargeCard;
