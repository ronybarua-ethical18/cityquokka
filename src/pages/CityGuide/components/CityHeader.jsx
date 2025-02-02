import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import nightlife from "../../../assets/nightlife.svg";
import sport from "../../../assets/sports.png";
import markets from "../../../assets/Markets.svg";
import entertainment from "../../../assets/entertainment.svg";
import art from "../../../assets/arts.png";

function CityHeader() {
  const [selectedButton, setSelectedButton] = useState("");
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop();

  // Function to handle button click and update the selected button
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  // Create a helper function to conditionally apply font weight
  const getFontWeight = (buttonName) => {
    return selectedButton === buttonName || currentPath === buttonName ? "font-bold" : "font-normal";
  };

  return (
    <div className="flex justify-center w-full bg-zinc-100 mb-32">
      <div className="max-w-[1120px] h-[40px] flex items-center justify-center w-full">
        <div className="flex flex-nowrap gap-9 items-center">
          <p className="text-xl text-white hidden sm:block">|</p>
          <Link to="/cityguide/nightlife">
            <button
              className={`my-auto whitespace-nowrap flex items-center gap-2 ${getFontWeight("nightlife")}`}
              style={{ fontFamily: "Inter", fontSize: "18px" }}
              onClick={() => handleButtonClick("nightlife")}
            >
              <img src={nightlife} alt="nightlife icon" className="w-5 h-5" />
              Nightlife
            </button>
          </Link>
          <p className="text-xl text-white hidden sm:block">|</p>
          
          <Link to="/cityguide/sport">
            <button
              className={`my-auto whitespace-nowrap flex items-center gap-2 ${getFontWeight("sport")}`}
              style={{ fontFamily: "Inter", fontSize: "18px" }}
              onClick={() => handleButtonClick("sport")}
            >
              <img src={sport} alt="sport icon" className="w-5 h-5" />
              Sport
            </button>
          </Link>
          <p className="text-xl text-white hidden sm:block">|</p>

          <Link to="/cityguide/markets">
            <button
              className={`my-auto whitespace-nowrap flex items-center gap-2 ${getFontWeight("markets")}`}
              style={{ fontFamily: "Inter", fontSize: "18px" }}
              onClick={() => handleButtonClick("markets")}
            >
              <img src={markets} alt="markets icon" className="w-5 h-5" />
              Markets
            </button>
          </Link>
          <p className="text-xl text-white hidden sm:block">|</p>

          <Link to="/cityguide/entertainment">
            <button
              className={`my-auto whitespace-nowrap flex items-center gap-2 ${getFontWeight("entertainment")}`}
              style={{ fontFamily: "Inter", fontSize: "18px" }}
              onClick={() => handleButtonClick("entertainment")}
            >
              <img src={entertainment} alt="entertainment icon" className="w-5 h-5" />
              Entertainment
            </button>
          </Link>
          <p className="text-xl text-white hidden sm:block">|</p>

          <Link to="/cityguide/article">
            <button
              className={`my-auto whitespace-nowrap flex items-center gap-2 ${getFontWeight("article")}`}
              style={{ fontFamily: "Inter", fontSize: "18px" }}
              onClick={() => handleButtonClick("article")}
            >
              <img src={art} alt="art icon" className="w-5 h-5" />
              Article
            </button>
          </Link>
          <p className="text-xl text-white hidden sm:block">|</p>
        </div>
      </div>
    </div>
  );
}

export default CityHeader;