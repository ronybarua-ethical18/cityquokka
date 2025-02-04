import React from "react";
import marketHeaderImage from "../../../../assets/MarketHeader.png"
import SocialActions from "@/components/shared/SocialActions"



export default function MarketHeader() {
  return (
    <div className="flex flex-col py-0.5 mt-4 w-full text-black font-inter max-md:mt-10 max-md:max-w-full">

      <div className="self-start mt-0 text-[60px] font-extrabold tracking-wider leading-[63px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
      Best things to do in Sydney this December
      </div>

      <div className="mt-4 text-[30px] tracking-tight leading-10 font-[596] text-neutral-500 w-[740px] max-lg:w-full">
      See out spring with a host of community festivals, gigs and long-awaited art exhibitions
      </div>
      <div className="flex flex-wrap gap-5 justify-between mt-4 w-full leading-none max-md:max-w-full">
        <div className="text-base tracking-tight font-[375]">
          Written by John Wastnage - Co-founder City Quokka
        </div>
        <SocialActions />
      </div>
      <div className="relative w-[956.701px] h-[444.354px] mt-4 max-lg:w-full max-lg:h-auto max-lg:aspect-[2.15]">
        <img
          loading="lazy"
          src={marketHeaderImage}
          className="object-cover absolute inset-0 w-full h-full"
          alt="Article header image"
        />


        <div className="relative px-3 py-0.5 inline-block rounded-md bg-zinc-300 text-xl tracking-tight leading-none font-[281] text-neutral-500 mt-4">
          Wednesday 30 October 2024
        </div>
      </div>

    </div>
  );
} 