import  { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Placeholder image sources (Replace with actual paths)
import mySydneyIcon from "../../../../assets/my-sydney.png";
import profileIcon from "../../../../assets/profile.png";
import myOffersIcon from "../../../../assets/my-offers.svg";


function ProfileNavbar() {
  const [selectedButton, setSelectedButton] = useState("");
  const location = useLocation();
  const currentPath = location.pathname.split("/").pop();

  // Function to handle button click and update the selected button
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  // Create a helper function to conditionally apply font weight
  const getFontWeight = (buttonName) => {
    return selectedButton === buttonName || currentPath === buttonName
      ? "font-bold"
      : "font-normal";
  };

  // SVG Separator Component (only visible on desktop)
  const Separator = () => (
    <svg
      width="10"
      height="30"
      viewBox="0 0 10 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hidden sm:block" // Hides separator on mobile
    >
      <line x1="5" y1="0" x2="5" y2="30" stroke="white" strokeWidth="2.402" />
    </svg>
  );

  return (
    <div className="w-full bg-[#EFEFEF] shadow-sm">
      <div className="flex justify-center w-full">
        {/* Container that centers items horizontally */}
        <div className="flex justify-center items-center gap-4 sm:gap-8 py-4">
          {/* Left Separator (only desktop) */}
          <Separator />

          {/* My Sydney Button */}
          <Link to="/sydney">
            <button
              className={`flex items-center gap-2 text-sm sm:text-lg text-primary ${getFontWeight(
                "my-sydney"
              )}`}

              style={{ fontFamily: "Inter" }}
              onClick={() => handleButtonClick("my-sydney")}
            >
              <img src={mySydneyIcon} alt="My Sydney icon" className="w-[20px] h-[20px]" />
              <span className="truncate">My Sydney</span>
            </button>
          </Link>

          {/* Separator between My Sydney & Profile (only desktop) */}
          <Separator />

          {/* Profile Button */}
          <Link to="/profile">
            <button
              className={`flex items-center gap-2 text-sm sm:text-lg text-primary ${getFontWeight(
                "profile"
              )}`}
              style={{ fontFamily: "Inter" }}
              onClick={() => handleButtonClick("profile")}
            >
              <img src={profileIcon} alt="Profile icon" className="w-[20px] h-[20px]" />
              <span className="truncate">Profile</span>
            </button>
          </Link>

          {/* Separator between Profile & My Offers (only desktop) */}
          <Separator />

          {/* My Offers Button */}
          <Link to="/offers">
            <button
              className={`flex items-center gap-2 text-sm sm:text-lg text-primary ${getFontWeight(
                "my-offers"
              )}`}
              style={{ fontFamily: "Inter" }}
              onClick={() => handleButtonClick("my-offers")}
            >
              <img src={myOffersIcon} alt="My Offers icon" className="w-[20px] h-[20px]" />
              <span className="truncate">My Offers</span>
            </button>
          </Link>

          {/* Right Separator (only desktop) */}
          <Separator />
        </div>
      </div>
    </div>
  );
}

export default ProfileNavbar;
