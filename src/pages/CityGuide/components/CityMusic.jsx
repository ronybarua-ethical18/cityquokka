import React from "react";
import musicImage from "../../../assets/Music.png";

export default function CityMusic() {
  return (
    <div className="flex mt-8 mb-6">
      {/* Image Div */}
      <div className="flex-grow flex flex-col mt-10 rounded-none">
        <img 
          src={musicImage} 
          alt="Music preview" 
          width={583} 
          height={375}
          className="object-cover" 
        />
      </div>

      {/* Green Div (Music content) */}
      <div className="flex-grow flex flex-col w-[545px] h-[413px] border-black pt-10 rounded-l-none">
        {" "}
        {/* No rounding on left side */}
        <div className="flex flex-col grow px-8 pb-6 pt-12 w-full text-xl font-bold tracking-tighter bg-[#00CA44] leading-none text-center text-black rounded-l-none max-md:px-5 max-md:mt-8 relative">
          {" "}
          {/* No rounding on left side */}
          {/* Floating Button */}
          <div className="absolute top-0 left-6 translate-x-0 -translate-y-1/2 z-10 px-3 py-2 bg-white rounded-lg border-black border-solid border-[3px] whitespace-nowrap font-bold">
            Music
          </div>
          <p className="pt-[25px] text-[30px] font-bold text-[#000] text-justify font-[Author] leading-[128%] tracking-[-0.9px] capitalize">
            Global flavors at your fingertips: A foodie's guide to UTS Food
            outlets
          </p>
          <br />
          {/* Remaining text with updated styles */}
          <p className="text-[18px] font-[375] text-[#000] text-justify font-[Author] leading-[128%] tracking-[-0.54px] capitalize">
            Discover places and find a variety of global cuisines to satisfy
            your cravings all in the heart of UTS buildings. Discover places and
            find a variety of global cuisines to satisfy your cravings all in
            the heart of UTS buildings. <br /> Discover places and find a variety of
            global cuisines to satisfy your cravings all in the heart of UTS
            buildings.
          </p>
        </div>
      </div>
    </div>
  );
}