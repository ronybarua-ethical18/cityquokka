import React from "react";
import foodImage from "../../../../assets/Food.png";
import CityHeader from "../../components/CityHeader";

export default function NightLifeBody() {
    return (
      <div className="flex flex-col items-center">
        <div className="max-w-[1120px] w-full">
          <CityHeader />
        </div>
        <div className="flex mt-10 mb-6 max-w-[1120px] w-full pt-15">
          {/* Purple Div - 50% Width */}
          <div className="w-1/2 flex flex-col border-black">
            <div className="flex flex-col h-[375px] px-8 pb-6 pt-12 w-full text-xl font-bold tracking-tighter bg-[#A97BF3] leading-none text-center text-black rounded-l-[6px] max-md:px-5 max-md:mt-8 relative">
              {/* Floating Button */}
              <div className="absolute top-0 left-6 translate-x-0 -translate-y-1/2 z-10 px-3 py-2 bg-white rounded-lg border-black border-solid border-[3px] whitespace-nowrap font-extrabold h-[60px] text-[35px]">
              Best late-night venues 
              </div>
              <div className="mt-6 space-y-6">


                {/* Title with reduced size */}
                <p className="text-[30px] font-bold text-[#000] text-justify font-inter leading-[100%] tracking-[-0.9px] capitalize">
                  Global flavors at your fingertips: A foodie's guide to UTS Food
                  outlets
                </p>
                <br />
  
                {/* Remaining text with adjusted size */}
                <p className="pb-5 text-[16px] font-[375] text-[#000] text-justify font-inter leading-[128%] tracking-[-0.54px] capitalize">
                  Discover places and find a variety of global cuisines to satisfy
                  your cravings all in the heart of UTS buildings. Discover places
                  and find a variety of global cuisines to satisfy your cravings all
                  in the heart of UTS buildings. Discover places and find a variety
                  of global cuisines to satisfy your cravings all.
                </p>
              </div>
            </div>
          </div>
  
          {/* Image Div - 50% Width */}
          <div className="w-1/2">
            <img 
              src={foodImage} 
              alt="Food" 
              width={586} 
              height={375} 
              className="w-full h-[375px] object-cover rounded-r-[6px]"
            />
          </div>
        </div>
      </div>
    );
  }