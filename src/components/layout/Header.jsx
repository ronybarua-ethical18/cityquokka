import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logoIcon from "../../assets/CQ.svg";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex flex-col w-full bg-white pb-4 pt-6 mb-4">
      <div className="flex flex-col self-center w-full max-w-[390px] md:max-w-[1122px] bg-white px-4 sm:px-0">
        {/* Align SignUp/LogIn button and icon to the right */}
        <div className="flex justify-between items-center text-lg tracking-tight leading-snug text-black font-medium">
          <div className="flex justify-end w-full">
            <button
              onClick={() => navigate("/signup")}
              className="hover:text-[#7642C8] transition-colors font-inter"
            >
              SignUp / LogIn
            </button>
          </div>
          <button className="w-10 h-10 rounded-full bg-zinc-300 ml-4"></button> {/* Icon to the right */}
        </div>

        <div className="flex justify-center w-full py-6 sm:py-8">
          <button
            onClick={() => navigate("/")}
            className="cursor-pointer"
          >
            <img
              className="object-contain max-w-full"
              src={logoIcon}
              alt="CQ"
              width={200}
              height={60}
            />
          </button>
        </div>

        <div className="w-full h-[4px] bg-[#EFEFEF]"></div>

        <div className="flex justify-center items-center gap-2 sm:gap-9 mt-5 text-lg sm:text-xl leading-snug text-black font-normal sm:font-medium flex-wrap sm:flex-nowrap">
          <button
            onClick={() => navigate("/home")}
            className={`px-2 whitespace-nowrap ${
              location.pathname === "/home" ? "font-bold" : "font-normal"
            }`}
          >
            Home
          </button>
          <p className="text-2xl sm:text-4xl">|</p>

          <button
            onClick={() => navigate("/cityguide")}
            className={`px-2 whitespace-nowrap ${
              location.pathname === "/cityguide" ? "font-bold" : "font-normal"
            }`}
          >
            City Guide
          </button>
          <p className="text-2xl sm:text-4xl">|</p>

          <button
            onClick={() => navigate("/business")}
            className={`px-2 whitespace-nowrap ${
              location.pathname === "/business" ? "font-bold" : "font-normal"
            }`}
          >
            I&apos;m A Business
          </button>
        </div>
      </div>
    </div>
  );
}
