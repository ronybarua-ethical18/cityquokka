import React from "react";
import MelbourneCup from "@/assets/MelbourneCup.png";
import arrowDownIcon from "@/assets/mingcute_arrows-down-line.svg";

export default function Body() {
  return (
    <div className="flex self-center w-full max-w-[1122px] bg-white flex-row max-md:flex-col sm:p-6 px-4">
      {/* Left Image Section */}
      <div className="flex justify-center w-full max-md:w-full flex-grow relative">
        <div className="absolute top-12 left-4 max-md:left-2 transform z-10 sm:pt-10 max-w-[330px] md:max-w-[450px]">
          <h1 className="text-[#00CA44] text-[30px] md:text-[65px] font-inter font-black mb-2 text-left [-webkit-text-stroke:1px_black] md:[-webkit-text-stroke:4px_black] leading-[84%] tracking-[-1.5px] md:tracking-[-3.509px] uppercase sm:pb-4">
            MELBOURNE CUP
          </h1>
          <h2 className="text-[#FFB200] text-[24px] sm:text-[45px] font-inter font-black mb-2 text-left [-webkit-text-stroke:1px_black] md:[-webkit-text-stroke:4px_black] leading-[84%] tracking-[-1.5px] md:tracking-[-3.509px] uppercase">
            The race that stops the nation
          </h2>
        </div>

        <img
          src={MelbourneCup}
          alt="Melbourne cityscape"
          width={685}
          height={543}
          className="object-cover rounded-md w-full max-md:h-[260px] md:max-h-[543px]"
        />
      </div>

      {/* Right Content Section */}
      <div className="flex flex-col ml-auto max-md:w-full flex-grow">
        <div
          className="flex flex-col items-start justify-start sm:pt-16 py-2 sm:py-8 px-8 text-center text-black bg-green-500 rounded-md w-full h-full"
          style={{ maxHeight: "543px", maxWidth: "545px" }}
        >

          <p className="text-black text-[18px] sm:text-[24px] font-inter font-bold leading-[20px] sm:leading-[28px] tracking-[-0.75px] uppercase text-justify">
            It&apos;s Sydney Marathon weekend and you can build up to Sunday&apos;s race
            with our fave clubbing.
            <div className="mt-4 max-md:hidden flex items-end justify-end">
              <button className="text-white">
                <img
                  src={arrowDownIcon}
                  alt="Arrow down"
                  width={30}
                  height={24}
                  className="object-cover rounded-md"
                />
              </button>
            </div>
          </p>

          {/* Align "Learn More" button to the right */}
          <div className="mt-auto flex justify-end w-full">
            <button className="flex w-[100px] h-[30px] p-[10px_16px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[6px] bg-white text-black font-semibold whitespace-nowrap text-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
