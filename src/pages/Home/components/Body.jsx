import React from "react";
import melbourneImg from "@/assets/Melbourne.png";
import arrowDownIcon from "@/assets/mingcute_arrows-down-line.svg";

export default function Body() {
  return (
    <div className="flex self-center w-full max-w-[1122px] max-md:max-w-full bg-white pt-16 flex-row max-md:flex-col max-md:px-[34px]">
      {/* Image container with equal height */}
      <div className="flex justify-center w-full max-md:w-full max-md:mb-0 flex-grow">
        <img
          src={melbourneImg}
          alt="Melbourne cityscape"
          width={685}
          height={543}
          className="object-cover rounded-md w-full h-full max-md:w-full max-md:h-full"
        />
      </div>

      {/* Green div with equal height */}
      <div className="flex flex-col ml-auto max-md:w-full max-md:items-center max-md:mt-0 flex-grow">
        <div
          className="flex flex-col relative items-start pt-6 pr-1 pb-6 pl-6 text-black bg-green-500 rounded-md max-md:py-12 max-md:pl-5 max-md:max-w-full w-full h-full"
          style={{
            maxHeight: "516px",
          }}
        >
          <div className="text-black text-[18px] font-author font-bold leading-[24px] tracking-[-0.75px] uppercase pb-2 flex justify-between items-center w-full">
            <div className="flex-1">
              It's Sydney Marathon weekend and you can build up to Sunday's race
              with our fave clubbing.
            </div>
            <button className="self-end text-white">
              <img
                src={arrowDownIcon}
                alt="Arrow down"
                width={30}
                height={24}
                className="object-cover rounded-md"
              />
            </button>
          </div>

          <div className="mt-auto self-end mr-8">
            <button className="flex w-[100px] h-[30px] p-[10px_16px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[6px] bg-white text-black font-semibold whitespace-nowrap text-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
