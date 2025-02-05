import React from "react";
import foodImage from "../../../../assets/Food.png";


export default function NightLifeBody() {
  return (
    <div className="flex flex-col sm:flex-row mt-10 mb-6">
      {/* Purple Div */}
      <div className="w-full sm:w-1/2 flex flex-col">
        <div className="flex flex-col h-[530px] sm:h-[375px] px-8 pb-6 pt-12 w-full text-xl font-bold tracking-tighter bg-[#A97BF3] leading-none text-center text-black rounded-l-[6px] sm:rounded-l-[6px] sm:rounded-r-none max-md:px-5 max-md:mt-8 relative">
          {/* Floating Button */}
          <div className="absolute top-0 left-6 translate-x-0 -translate-y-1/2 z-10 px-3 py-2 bg-white rounded-lg border-black border-solid border-[3px] whitespace-nowrap font-bold">
            What&apos;s on
          </div>

          {/* Content Container with flex ordering */}
          <div className="flex flex-col justify-between h-full">
            {/* Image for mobile - shown at top */}
            <div className="block sm:hidden -mx-8 max-md:-mx-5 -mt-12">
              <img
                src={foodImage}
                alt="Food"
                className="w-full h-[200px] object-cover"
              />
            </div>

            {/* Text Content - pushed down in mobile */}
            <div className="order-2 sm:order-1 mt-6">
              <p className="text-[24px] font-bold text-[#000] text-justify font-inter leading-[135%] tracking-[-0.9px] capitalize">
                Global flavors at your fingertips: A foodie&apos;s guide to UTS Food
                outlets
              </p>
              <br />
              <p className="pb-5 text-[16px] font-[375] text-[#000] text-justify font-inter leading-[135%] tracking-[-0.54px] capitalize">
                Discover places and find a variety of global cuisines to satisfy
                your cravings all in the heart of UTS buildings. Discover places
                and find a variety of global cuisines to satisfy your cravings all
                in the heart of UTS buildings. Discover places and find a variety
                of global cuisines to satisfy your cravings all.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Div - hidden on mobile since we moved it above */}
      <div className="hidden sm:block w-full sm:w-1/2">
        <img
          src={foodImage}
          alt="Food"
          className="w-full h-[375px] object-cover sm:rounded-r-[6px] sm:rounded-l-none rounded-b-[6px] sm:rounded-b-none"
        />
      </div>
    </div>
  );
}