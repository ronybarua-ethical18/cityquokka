import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
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
  );
}