import React from "react";
import musicImage from "../../../assets/Music.png";

export default function CityMusic() {
  return (
    <div className="flex flex-col sm:flex-row mt-8 mb-6 pt-10">
      {/* Image Div - shown on the left in desktop view */}
      <div className="hidden sm:flex w-full sm:w-1/2 flex-grow flex-col order-1 sm:order-1">
        <img

          src={musicImage}
          alt="Music preview"
          className="w-full h-[375px] object-cover sm:rounded-l-[6px] sm:rounded-r-none rounded-b-[6px] sm:rounded-b-none"
        />
      </div>

      {/* Green Div - Music Content */}
      <div className="w-full sm:w-1/2 flex-grow flex flex-col h-auto sm:h-[413px] border-blac rounded-l-none sm:rounded-r-[6px] sm:rounded-l-none order-2 sm:order-2">
        <div className="flex flex-col grow px-8 sm:max-h-[375px] pb-6 pt-12 w-full text-xl font-bold tracking-tighter bg-[#00CA44] leading-none text-center text-black sm:rounded-r-[6px] sm:rounded-l-none max-md:px-5 max-md:mt-8 relative">
          {/* Floating Button - stays at top */}

          <div className="absolute top-0 left-6 translate-x-0 -translate-y-1/2 z-10 px-3 py-2 bg-white rounded-lg border-black border-solid border-[3px] whitespace-nowrap font-bold">
            MUSIC
          </div>

          {/* Content Container with flex ordering */}
          <div className="flex flex-col justify-between h-full">
            {/* Image for mobile - shown at top */}
            <div className="block sm:hidden -mx-8 max-md:-mx-5 -mt-12">
              <img
                src={musicImage}
                alt="Music preview"
                className="w-full h-[200px] object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="mt-6">
              <p className="text-[30px] font-bold text-[#000] text-justify font-inter leading-[128%] tracking-[-0.9px] capitalize">
                Global flavors at your fingertips: A foodie&apos;s guide to UTS Food
                outlets
              </p>
              <br />
              <p className="text-[18px] font-[375] text-[#000] text-justify font-inter leading-[128%] tracking-[-0.54px] capitalize">
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
      </div>
    </div>
  );
}