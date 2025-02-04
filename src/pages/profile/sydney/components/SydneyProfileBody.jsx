import React from "react";
import Map from "../../../../assets/map.png";
import { ChevronDown } from "lucide-react"; // Change import to ChevronDown

export default function SydneyProfileBody() {
  const myListItems = [
    "EVENTS ",
    "ACTIVITIES",
    "DESTINATIONS",
    "SERVICES",
    "John's fave brunch spots",
    "music festivals 24/25",
  ];

  return (
    <div className="flex flex-col sm:flex-row mt-10 mb-6 gap-6 sm:gap-12 items-start relative">
      {/* Left Section - Orange Box */}
      <div className="w-[250px] sm:w-[40%] lg:w-[30%] absolute sm:relative left-0 top-0 z-10 h-full sm:h-auto -mx-10 sm:mx-0">
        <div className="flex flex-col h-full sm:h-[497px] px-8 pb-6 pt-12 w-full text-xl font-bold tracking-tighter bg-[#FFB200] leading-none text-center text-black rounded-[6px] relative">
          <div className="absolute top-0 left-6 -translate-y-1/2 z-10 px-3 py-2 bg-white rounded-lg border-black border-solid border-[3px] whitespace-nowrap font-bold">
            My List
          </div>
          <div className="mt-6 space-y-6 flex flex-col justify-between h-full">
            <div>
              <p className="text-[16px] font-normal text-black text-justify font-inter leading-[100%] tracking-[-0.9px] capitalize">
                {myListItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <span className="pb-2 inline-block flex items-center">
                      <span className="mr-2"><ChevronDown size={16} className="text-white" /></span>
                      {item}
                      <br />
                    </span>
                    <div className="w-[180px] h-[4px] bg-white mb-4"></div>
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-full sm:w-[70%] h-[497px] flex-grow relative">
        <img
          src={Map}
          alt="Map"
          className="w-full h-full object-cover rounded-[6px]"
        />
      </div>
    </div>
  );
}