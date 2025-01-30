import React from "react";
import foodImage from "../../../src/assets/Food.png";

export default function CityBody() {
  return (
    <div className="flex mt-10 mb-6">
      {" "}
      {/* Outer container without gap */}
      {/* New Div 1 (Purple Div) */}
      <div className="flex-grow flex flex-col w-[33%] h-full border-black pt-10 rounded-l-none">
        {" "}
        {/* No rounding on left side */}
        <div className="flex flex-col grow px-8 pb-6 pt-12 w-full text-xl font-bold tracking-tighter bg-[#A97BF3] leading-none text-center text-black rounded-l-none max-md:px-5 max-md:mt-8 relative">
          {" "}
          {/* No rounding on left side */}
          {/* Floating Button */}
          <div className="absolute top-0 left-6 translate-x-0 -translate-y-1/2 z-10 px-3 py-2 bg-white rounded-lg border-black border-solid border-[3px] whitespace-nowrap font-bold">
            What&apos;s on
          </div>
          <div className="mt-6 space-y-6">
            {/* Title with reduced size */}
            <p className="text-[24px] font-bold  text-[#000] text-justify font-[Author] leading-[100%] tracking-[-0.9px] capitalize">
              Global flavors at your fingertips: A foodie's guide to UTS Food
              outlets
            </p>
            <br />

            {/* Remaining text with adjusted size */}
            <p className="pb-5 text-[16px] font-[375] text-[#000] text-justify font-[Author] leading-[128%] tracking-[-0.54px] capitalize">
              Discover places and find a variety of global cuisines to satisfy
              your cravings all in the heart of UTS buildings. Discover places
              and find a variety of global cuisines to satisfy your cravings all
              in the heart of UTS buildings. Discover places and find a variety
              of global cuisines to satisfy your cravings all.
            </p>
          </div>
        </div>
      </div>
      {/* New Div 2 (Image Div) */}
      <div className="flex-grow flex flex-col mt-10 rounded-none">
        <img 
          src={foodImage} 
          alt="Food" 
          width={365} 
          height={375} 
        />
      </div>
      {/* Main Content Div (Orange Div) */}
      <div className="flex flex-col w-full sm:w-[33%] max-md:w-full relative mt-10 pl-10 rounded-lg">
        {" "}
        {/* Rounding applied to all sides */}
        <div className="flex flex-col grow px-8 pb-6 pt-12 w-full text-xl font-bold tracking-tighter leading-none text-center text-black bg-yellow-500 rounded-lg max-md:px-5 max-md:mt-8 relative">
          {" "}
          {/* Rounding applied to all sides */}
          {/* Floating Button */}
          <div className="absolute top-0 left-6 translate-x-0 -translate-y-1/2 z-10 px-3 py-2 bg-white rounded-lg border-black border-solid border-[3px] whitespace-nowrap font-bold">
            Trending
          </div>
          <div className="mt-5 space-y-6 font-bold">
            {/* List items */}
            <div className="flex items-center gap-4 pb-2">
              <span className="text-[60px] text-[#FFFFFFCC]">1</span>
              <p className="text-[18px] text-gray-800 flex-1 text-start">
                Discover Places And Find A Variety Of Global Cuisines To Satisfy
                Your Cravings.
              </p>
            </div>
            <div className="flex items-center gap-4 pb-2">
              <span className="text-[60px] text-[#FFFFFFCC]">2</span>
              <p className="text-[18px] text-gray-800 flex-1 text-start">
                Discover Places And Find A Variety Of Global Cuisines To Satisfy
                Your Cravings.
              </p>
            </div>
            <div className="flex items-center gap-4 pb-2">
              <span className="text-[60px] text-[#FFFFFFCC]">3</span>
              <p className="text-[18px] text-gray-800 flex-1 text-start">
                Discover Places And Find A Variety Of Global Cuisines To Satisfy
                Your Cravings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}