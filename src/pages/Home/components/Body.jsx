import React from "react";
import MelbourneCup from "@/assets/MelbourneCup.png";
import arrowDownIcon from "@/assets/mingcute_arrows-down-line.svg";

export default function Body() {
  return (
    <div className="flex self-center w-full max-w-[1122px] bg-white pt-16 flex-row max-md:flex-col p-4">
      <div className="flex justify-center w-full max-md:w-full max-md:mb-0 flex-grow relative">
        <div className="absolute top-12 left-8 transform z-10 sm:pt-10 max-w-[330px] md:max-w-[450px]">
          <h1 className="text-[#00CA44] text-[40px] md:text-[60px] font-inter font-black mb-2 text-left [-webkit-text-stroke:2px_black] md:[-webkit-text-stroke:4px_black] leading-[74%] tracking-[-2px] md:tracking-[-3.509px] uppercase sm:pb-4">
            MELBOURNE <br /> CUP
          </h1>

          <h2 className="text-[#FFB200] text-[30px] md:text-[50px] font-inter font-black mb-2 text-left [-webkit-text-stroke:2px_black] md:[-webkit-text-stroke:4px_black] leading-[74%] tracking-[-2px] md:tracking-[-3.509px] uppercase">
            The race that stops the nation
          </h2>
        </div>
        <img
          src={MelbourneCup}
          alt="Melbourne cityscape"
          width={685}
          height={543}
          className="object-cover rounded-md w-full h-full max-md:w-full max-md:h-full"
        />
      </div>
      <div className="flex flex-col ml-auto max-md:w-full flex-grow">
        <div
          className="flex flex-col relative pt-6 pr-6 pb-6 pl-6 text-black bg-green-500 rounded-md max-md:py-0 max-md:pl-0 max-md:pr-0 w-full h-full"
          style={{ maxHeight: "516px" }}
        >
          <div className="flex flex-col items-center justify-between w-full h-full p-2">
          <div className="text-black text-[18px] font-author font-bold leading-[24px] tracking-[-0.75px] uppercase pb-2 flex flex-col items-center justify-center w-full text-center max-md:text-left"> {/* Added max-md:text-left */}
              <div className="sm:pt-40">
                It's Sydney Marathon weekend and you can build up to Sunday's race
                with our fave clubbing.
              </div>
              <div className="mt-2 max-md:hidden self-end">
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
            </div>

            <div className="mt-auto self-end mr-8 max-md:mt-4 max-md:mr-0"> {/* Correct "Learn More" alignment */}
              <button className="flex w-[100px] h-[30px] p-[10px_16px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[6px] bg-white text-black font-semibold whitespace-nowrap text-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}