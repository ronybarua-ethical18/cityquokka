import React, { useState } from "react";
import { Link } from "react-router-dom";
import filterIcon from "../../../assets/Filter.svg";

function CityHeader() {
  const [selectedButton, setSelectedButton] = useState("nightlife");

  // Function to handle button click and update the selected button
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  // Create a helper function to conditionally apply font weight
  const getFontWeight = (buttonName) => {
    return selectedButton === buttonName ? "font-bold" : "font-normal";
  };

  return (
    <div className="pl-[299px] flex flex-wrap gap-5 justify-between items-center w-full py-2 pr-4 mt-9 bg-zinc-100 text-base tracking-tight leading-snug text-black font-[375] max-md:pl-5 max-md:mr-2.5">
      <div className="flex gap-9 items-center">
        <Link to="/cityguide/nightlife">
          <button
            className={`my-auto ${getFontWeight("nightlife")}`}
            style={{ fontFamily: "Author", fontSize: "18px" }}
            onClick={() => handleButtonClick("nightlife")}
          >
            Nightlife
          </button>
        </Link>
        <p className="text-xl text-white hidden sm:block">|</p>
        
        <Link to="/cityguide/sport">
          <button
            className={`my-auto ${getFontWeight("sport")}`}
            style={{ fontFamily: "Author", fontSize: "18px" }}
            onClick={() => handleButtonClick("sport")}
          >
            Sport
          </button>
        </Link>
        <p className="text-xl text-white hidden sm:block">|</p>

        <Link to="/cityguide/markets">
          <button
            className={`my-auto ${getFontWeight("markets")}`}
            style={{ fontFamily: "Author", fontSize: "18px" }}
            onClick={() => handleButtonClick("markets")}
          >
            Markets
          </button>
        </Link>
        <p className="text-xl text-white hidden sm:block">|</p>

        <Link to="/cityguide/entertainment">
          <button
            className={`my-auto ${getFontWeight("entertainment")}`}
            style={{ fontFamily: "Author", fontSize: "18px" }}
            onClick={() => handleButtonClick("entertainment")}
          >
            Entertainment
          </button>
        </Link>
        <p className="text-xl text-white hidden sm:block">|</p>

        <Link to="/cityguide/article">
          <button
            className={`my-auto ${getFontWeight("arts")}`}
            style={{ fontFamily: "Author", fontSize: "18px" }}
            onClick={() => handleButtonClick("arts")}
          >
            Article
          </button>
        </Link>
      </div>

      {/* Filter Image */}
      <button>
        <img
          src={filterIcon}
          alt="Filter Icon"
          width={23}
          height={21}
          className="object-cover rounded-md ml-auto"
        />
      </button>
    </div>
  );
}

export default CityHeader;