import React from "react";
import melbourneImg from "@/assets/Melbourne.png";
import arrowDownIcon from "@/assets/mingcute_arrows-down-line.svg";

export default function Body() {
  return (
    <div className="flex self-center w-full max-w-[1122px] max-md:max-w-full bg-white pt-16">
      {/* Image Container (Hidden on mobile) */}
      <div className="flex flex-col relative max-md:hidden" style={{ width: "682px" }}>
        <img
          src={melbourneImg}
          alt="Melbourne cityscape"
          width={685}
          height={543}
          className="object-cover rounded-md"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col ml-auto max-md:w-full max-md:px-5">
        <div
          className="flex flex-col relative items-start pt-28 pr-1 pb-12 pl-12 ml-auto text-black bg-green-500 rounded-md max-md:py-24 max-md:pl-5 max-md:max-w-full"
          style={{ width: "440px", height: "543px" }}
        >
          <div className="text-black text-[25px] font-author font-bold leading-[33.25px] tracking-[-1.05px] uppercase pb-4 flex justify-between items-center w-full">
            <div className="flex-1">
              It's Sydney Marathon weekend and you can build up to Sunday's race
              with our fave clubbing.
            </div>
            <button className="self-end text-white">
              <img
                src={arrowDownIcon}
                alt="Arrow down"
                width={38}
                height={30}
                className="object-cover rounded-md"
              />
            </button>
          </div>

          {/* Learn More Button */}
          <div className="mt-auto self-end mr-8">
            <button className="flex w-[112.32px] h-[36px] p-[14.009px_22.415px] justify-center items-center gap-[14.009px] flex-shrink-0 rounded-[6px] bg-white text-black font-semibold whitespace-nowrap">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}