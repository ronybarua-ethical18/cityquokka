import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logoIcon from '../../assets/CQ.svg';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex flex-col w-full bg-white pb-4 pt-6 mb-4">
      <div className="flex flex-col self-center w-full max-w-[1122px] max-md:max-w-full bg-white">
        <div className="flex gap-2.5 self-end text-lg tracking-tight leading-snug text-black font-[494] max-md:mr-0.5">
          <button 
            onClick={() => navigate("/signup")} 
            className="grow my-auto hover:text-[#7642C8] transition-colors font-inter"
          >
            SignUp / LogIn
          </button>
          <button className="flex shrink-0 w-10 h-10 rounded-full bg-zinc-300"></button>
        </div>
        <div className="flex justify-center w-full py-8">
          <button 
            onClick={() => navigate("/")}
            className="cursor-pointer"
          >
            <img
              className="object-contain max-w-full aspect-[3.37]"
              src={logoIcon}
              alt="CQ"
              width={357}
              height={106}
            />
          </button>
        </div>
        <div className="w-full sm:w-[1120px] h-[4px]" style={{ backgroundColor: "#EFEFEF" }}></div>

        <div className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-9 self-center mt-5 text-2xl leading-snug text-black font-[375] sm:text-base sm:justify-center">
          <button
            onClick={() => navigate("/home")}
            className="flex justify-center items-center whitespace-nowrap"
            style={{
              paddingTop: "10px",
              fontFamily: "Inter",
              fontSize: "25px",
              fontWeight: location.pathname === "/home" ? 700 : 400,
            }}
          >
            Home
          </button>
          <p className="text-4xl hidden sm:block">|</p>

          <button
            onClick={() => navigate("/cityguide")}
            className="flex justify-center items-center whitespace-nowrap"
            style={{
              paddingTop: "10px",
              fontFamily: "Inter",
              fontSize: "25px",
              fontWeight: location.pathname === "/cityguide" ? 700 : 400,
            }}
          >
            City Guide
          </button>
          <p className="text-4xl hidden sm:block">|</p>

          <button
            onClick={() => navigate("/business")}
            className="flex justify-center items-center whitespace-nowrap"
            style={{
              paddingTop: "10px",
              fontFamily: "Inter",
              fontSize: "25px",
              fontWeight: location.pathname === "/business" ? 700 : 400,
            }}
          >
            I&apos;m A Business
          </button>
        </div>
      </div>
    </div>
  );
}