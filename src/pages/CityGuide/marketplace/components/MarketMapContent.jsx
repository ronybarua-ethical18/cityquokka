import React from "react";
import Map from "../../../../assets/map.png";
import MarketSidebar from "./MarketSidebar";

export default function MarketBody() {
  return (
    <main className="w-full relative pt-20">
      <div className="w-full flex justify-center max-sm:hidden"></div>
      <div className="max-w-[1120px] mx-auto px-4 max-sm:px-2">
        <article className="w-[740px] max-md:w-full">
          <div className="w-[956.701px] max-lg:w-full">
            <div className="flex flex-col py-0.5 mt-4 w-full text-black font-inter max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-wrap gap-5 justify-between mt-4 w-full leading-none max-md:max-w-full"></div>
              <div className="flex gap-4 mt-4 max-lg:flex-col">
                <div className="flex-1">
                  <div className="mt-5 text-2xl tracking-tighter leading-10 max-md:max-w-full w-[422px]">
                    <span className="font-[494] text-neutral-500">Date: Sat, Dec 21, 2024 </span>
                    <span className="text-neutral-500"></span>
                    <br />
                    <span className="font-[494] text-neutral-500">Place : 3 Railway Street Rooty Hill, The Rocks </span>
                    <span className="text-neutral-500"> </span>
                    <a
                      href=""
                      className="underline text-neutral-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      
                    </a>
                    <br />
                    <span className="font-[494] text-neutral-500">Event Type : Market</span>
                    <span className="text-neutral-500"> </span>
                    <br />
                    <span className="font-[494] text-neutral-500">Price: Free </span>
                    <span className="text-neutral-500"></span>
                    <br />
                    <span className="font-[494] text-neutral-500">Web </span>
                    <span className="text-neutral-500"></span>
                    

                  </div>
                  <div className="flex flex-col mt-[80px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="159" height="53" viewBox="0 0 159 53" fill="none">
                      {/* ... SVG content ... */}
                    </svg>
                  </div>
                </div>
                <div className="relative w-[529.701px] h-[350.29px] max-lg:w-full max-lg:h-auto max-lg:aspect-[1.51]">
                  <img
                    loading="lazy"
                    src={Map}
                    className="object-cover absolute inset-0 w-full h-full"
                    alt="Article header image"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className="pt-10"> {/* Wrapper div with hidden lg:block */}
          <MarketSidebar />
        </div>
      </div>
    </main>
  );
}