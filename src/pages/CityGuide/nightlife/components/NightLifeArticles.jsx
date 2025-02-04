import React from "react";
import nightImage1 from "../../../../assets/nightImage1.png";
import nightImage2 from "../../../../assets/nightImage2.png";

export default function NightLifeArticles() {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-[930px] mt-10 py-10">
        <div className="relative flex items-center justify-center mb-10">
        <div className="absolute w-[1120px] h-[4px] bg-[#EFEFEF] hidden sm:block"></div>

          <span className="w-[261.588px] h-[48px] flex items-center justify-center bg-[#EBEBEB] text-[#6A6A6A] font-[Author] text-[25px] font-bold leading-[36.035px] rounded-[8px] z-10">
            More in City Quokka
          </span>
        </div>
        
        {/* Grid for articles */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-24">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <a
              key={item}
              href="#"
              className="flex flex-col cursor-pointer group w-full"
            >
              <div className="w-full h-[188px] overflow-hidden rounded-lg">
                <img
                  src={item % 3 === 1 ? nightImage1 : nightImage2}
                  alt={`Grid Item ${item}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 space-y-1">
                <p className="w-[290.72px] h-[37px] text-black text-justify font-inter text-[16px] font-[600] leading-[125%] tracking-[-0.54px] capitalize group-hover:text-[#7642C8]">
                  Global flavors at your fingertips: A foodie's guide to UTS Food
                </p>
                <p className="text-[14px] text-black font-[Author] leading-tight group-hover:text-[#7642C8]"></p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
