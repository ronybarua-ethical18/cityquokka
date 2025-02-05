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
    <div className="flex justify-center w-full bg-zinc-100 mb-16">
      <div className="max-w-[1120px] h-[40px] flex items-center justify-center w-full">
        <div className="flex flex-nowrap gap-9 items-center">
          <p className="text-xl text-white hidden sm:block">|</p>
          
          {/* Nightlife Button */}
          <Link to="/cityguide/nightlife">
            <button
              className={`my-auto whitespace-nowrap flex items-center gap-2 ${getFontWeight("nightlife")}`}
              style={{ fontFamily: "Inter", fontSize: "18px" }}
              onClick={() => handleButtonClick("nightlife")}
            >
              <img src={nightlife} alt="nightlife icon" className="w-5 h-5" />
              <span className="hidden sm:inline-block">Nightlife</span>
            </button>
          </Link>
          <p className="text-xl text-white hidden sm:block">|</p>
          
          {/* Sport Button */}
          <Link to="/cityguide/sport">
            <button
              className={`my-auto whitespace-nowrap flex items-center gap-2 ${getFontWeight("sport")}`}
              style={{ fontFamily: "Inter", fontSize: "18px" }}
              onClick={() => handleButtonClick("sport")}
            >
              <img src={sport} alt="sport icon" className="w-5 h-5" />
              <span className="hidden sm:inline-block">Sport</span>
            </button>
          </Link>
          <p className="text-xl text-white hidden sm:block">|</p>

          {/* Markets Button */}
          <Link to="/cityguide/markets">
            <button
              className={`my-auto whitespace-nowrap flex items-center gap-2 ${getFontWeight("markets")}`}
              style={{ fontFamily: "Inter", fontSize: "18px" }}
              onClick={() => handleButtonClick("markets")}
            >
              <img src={markets} alt="markets icon" className="w-5 h-5" />
              <span className="hidden sm:inline-block">Markets</span>
            </button>
          </Link>
          <p className="text-xl text-white hidden sm:block">|</p>

          {/* Entertainment Button */}
          <Link to="/cityguide/entertainment">
            <button
              className={`my-auto whitespace-nowrap flex items-center gap-2 ${getFontWeight("entertainment")}`}
              style={{ fontFamily: "Inter", fontSize: "18px" }}
              onClick={() => handleButtonClick("entertainment")}
            >
              <img src={entertainment} alt="entertainment icon" className="w-5 h-5" />
              <span className="hidden sm:inline-block">Entertainment</span>
            </button>
          </Link>
          <p className="text-xl text-white hidden sm:block">|</p>

          {/* Article Button */}
          <Link to="/cityguide/article">
            <button
              className={`my-auto whitespace-nowrap flex items-center gap-2 ${getFontWeight("article")}`}
              style={{ fontFamily: "Inter", fontSize: "18px" }}
              onClick={() => handleButtonClick("article")}
            >
              <img src={art} alt="art icon" className="w-5 h-5" />
              <span className="hidden sm:inline-block">Article</span>
            </button>
          </Link>
          <p className="text-xl text-white hidden sm:block">|</p>
        </div>
      </div>
    </div>
  );
}

export default CityHeader;
