import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[800px] ">
      <Image
        src="/Images/hero.jpg"
        objectFit="cover"
        layout="fill"
        alt="heroImage"
      />
      <div className="absolute w-48 sm:w-64 md:w-96  text-white top-1/3 text-left pl-5  left-0">
        <p className=" text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl ">Not sure where to go? Perfect.</p>
        <button className=" transition  text-purple-800 bg-white rounded-full  py-3 md:py-4 px-6  mt-10 md:px-12 my-5 transform hover:-translate-y-1 hover:scale-110 hover:border-2 border-purple-900  " >I'm Flexible</button>
      </div>
    </div>
  );
};

export default Banner;
