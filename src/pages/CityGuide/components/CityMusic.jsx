import React from "react";
import musicImage from "../../../assets/Music.png";

export default function CityMusic() {
  return (
    <div className="flex flex-col sm:flex-row mt-8 mb-6"> {/* Only reverse order on small screens */}
      {/* Green Div - Music Content */}
      <div className="w-full sm:w-1/2 flex-grow flex flex-col h-auto sm:h-[413px] border-black pt-10 rounded-l-none sm:rounded-l-[6px] sm:rounded-r-none">
        <div className="flex flex-col grow px-8 pb-6 pt-12 w-full text-xl font-bold tracking-tighter bg-[#00CA44] leading-none text-center text-black sm:rounded-l-[6px] sm:rounded-r-none max-md:px-5 max-md:mt-8 relative">
          <div className="absolute top-0 left-6 translate-x-0 -translate-y-1/2 z-10 px-3 py-2 bg-white rounded-lg border-black border-solid border-[3px] whitespace-nowrap font-bold">
            MUSIC
          </div>
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="pt-[25px] text-[30px] font-bold text-[#000] text-justify font-[Author] leading-[128%] tracking-[-0.9px] capitalize">
                Global flavors at your fingertips: A foodie's guide to UTS Food
                outlets
              </p>
              <br />
              <p className="text-[18px] font-[375] text-[#000] text-justify font-[Author] leading-[128%] tracking-[-0.54px] capitalize">
                Discover places and find a variety of global cuisines to satisfy
                your cravings all in the heart of UTS buildings. Discover places and
                find a variety of global cuisines to satisfy your cravings all in
                the heart of UTS buildings. <br /> Discover places and find a variety of
                global cuisines to satisfy your cravings all in the heart of UTS
                buildings.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      {/* Image Div */}
      <div className="w-full sm:w-1/2 flex-grow flex flex-col sm:mt-10 rounded-none sm:rounded-l-[6px] sm:rounded-r-none">
        <img
          src={musicImage}
          alt="Music preview"
          className="w-full h-[375px] object-cover sm:rounded-l-[6px] sm:rounded-r-none rounded-b-[6px] sm:rounded-b-none"
        />
      </div>
    </div>
  );
}
