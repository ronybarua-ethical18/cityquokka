import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Navbar() {
  const navigate = useNavigate();


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

        <Logo />

        <div className="w-full h-[4px] bg-[#EFEFEF]"></div>

        <Navigation />
      </div>
    </div>
  );
}