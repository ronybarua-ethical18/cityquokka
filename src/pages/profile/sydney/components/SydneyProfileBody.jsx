import React from "react";
import { ChevronDown } from "lucide-react";

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

      {/* Right Section - Map */}
      <div className="w-full sm:w-[70%] h-[497px] flex-grow relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26532.449767537553!2d150.844998!3d-33.77213185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129a3c5c1896a7%3A0x5017d681632c8e0!2sRooty%20Hill%20NSW%202766%2C%20Australia!5e0!3m2!1sen!2sbd!4v1738737160210!5m2!1sen!2sbd"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full rounded-[6px]"
        />
      </div>
    </div>
  );
}