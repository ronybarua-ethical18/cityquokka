import React from "react";
import { useNavigate } from "react-router-dom";
import logoIcon from "../../assets/CQ.svg";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center w-full py-6 sm:py-8">
      <button onClick={() => navigate("/")} className="cursor-pointer">
        <img
          className="object-contain max-w-full"
          src={logoIcon}
          alt="CQ"
          width={200}
          height={60}
        />
      </button>
    </div>
  );
}