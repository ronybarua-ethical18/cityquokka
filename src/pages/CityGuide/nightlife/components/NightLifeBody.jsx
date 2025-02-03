import React from "react";
import foodImage from "../../../../assets/Food.png";

export default function NightLifeBody() {
  return (
    <div className="flex flex-col sm:flex-row mt-10 mb-6"> {/* Key change: flex-col on smaller screens */}
      {/* Purple Div - 50% Width */}
      <div className="w-full sm:w-1/2 flex flex-col"> {/* Key change: w-full on smaller screens */}
        <div className="flex flex-col h-[375px] px-8 pb-6 pt-12 w-full text-xl font-bold tracking-tighter bg-[#A97BF3] leading-none text-center text-black rounded-l-[6px] sm:rounded-l-[6px] sm:rounded-r-none max-md:px-5 max-md:mt-8 relative"> {/* Added rounded corners conditionally */}
          {/* Floating Button */}
          <div className="absolute top-0 left-6 translate-x-0 -translate-y-1/2 z-10 px-3 py-2 bg-white rounded-lg border-black border-solid border-[3px] whitespace-nowrap font-bold">
            What&apos;s on
          </div>
          <div className="mt-6 space-y-6 flex flex-col justify-between h-full">
            <div>
              <p className="text-[24px] font-bold text-[#000] text-justify font-[Author] leading-[100%] tracking-[-0.9px] capitalize">
                Global flavors at your fingertips: A foodie's guide to UTS Food
                outlets
              </p>
              <br />
              <p className="pb-5 text-[16px] font-[375] text-[#000] text-justify font-[Author] leading-[128%] tracking-[-0.54px] capitalize">
                Discover places and find a variety of global cuisines to satisfy
                your cravings all in the heart of UTS buildings. Discover places
                and find a variety of global cuisines to satisfy your cravings all
                in the heart of UTS buildings. Discover places and find a variety
                of global cuisines to satisfy your cravings all.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      {/* Image Div - 50% Width */}
      <div className="w-full sm:w-1/2"> {/* Key change: w-full on smaller screens */}
        <img
          src={foodImage}
          alt="Food"
          className="w-full h-[375px] object-cover sm:rounded-r-[6px] sm:rounded-l-none rounded-b-[6px] sm:rounded-b-none" // Added rounded corners conditionally
        />
      </div>
    </div>
  );
}