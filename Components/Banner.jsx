import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="/Images/hero.jpg"
        objectFit="cover"
        layout="fill"
        alt="heroImage"
      />
      <div className="absolute w-full text-white top-1/2 text-left pl-10">
        <p className=" text-xl md:text-2xl lg:text-3xl xl:text-4xl shadow-md">Not sure where to go? Perfect.</p>
        <button className=" transition  text-purple-800 bg-white rounded-full  py-3 md:py-4 px-6  md:px-12 my-5 transform hover:-translate-y-1 hover:scale-110 hover:border-2 border-purple-900  " >I'm Flexible</button>
      </div>
    </div>
  );
};

export default Banner;
