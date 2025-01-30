import React from "react";
import tiktokIcon from '../../assets/tiktok.svg';
import instagramIcon from '../../assets/Ins.svg';

export default function Footer() {
  return (
    <div className="flex flex-col items-center px-20 pb-16 mt-24 w-full bg-zinc-100 bg-opacity-90 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[645px] max-md:w-full">
        {/* Title */}
        <div className="self-center text-4xl tracking-tighter leading-snug text-center text-black font-[596] pt-10 font-inter">
          Join the Mailing List
        </div>

        {/* Input and Button */}
        <div className="flex flex-wrap mt-11 w-full leading-snug max-md:mt-10 max-md:max-w-full">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email Address"
            className="flex-auto gap-6 self-stretch py-2 pr-3.5 pl-3.5 text-3xl tracking-tighter bg-white rounded-md border border-black border-solid min-h-[55px] text-zinc-400 max-md:w-full max-md:mb-4"
          />

          {/* Join Button */}
          <button className="gap-6 self-stretch px-9 py-3 text-2xl font-bold tracking-tight text-white whitespace-nowrap bg-black rounded-md min-h-[57px] max-md:px-5 max-md:w-full">
            Join
          </button>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-3 self-center mt-7 ml-6 max-w-full w-[102px]">
          <button>
            <img
              src={tiktokIcon}
              alt="TikTok"
              width={45}
              height={45}
              className="object-contain shrink-0 aspect-[0.94]"
            />
          </button>
          <button>
            <img
              src={instagramIcon}
              alt="Instagram"
              width={45}
              height={45}
              className="object-contain shrink-0 aspect-[0.94]"
            />
          </button>
        </div>

        {/* Acknowledgement Text */}
        <div className="font-inter">
          <p className="text-black mt-10 text-center text-sm max-md:text-xs">
            We acknowledge the traditional custodians of the land on which we
            live, work and play, and pay respects to all Elders past and
            present, and emerging.
          </p>
        </div>
      </div>
    </div>
  );
}