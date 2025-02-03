import React from "react";

import Footer from "@/components/layout/Footer";
import CityHeader from "@/pages/CityGuide/components/CityHeader";
import Carousel from "@/components/shared/Carousel";
import ShowMoreButton from '@/components/shared/ShowMoreButton';
import CityBody from "@/pages/CityGuide/components/CityBody";
import CityMusic from "@/pages/CityGuide/components/CityMusic";
import Navbar from "@/components/layout/Navbar";

export default function CityGuidePage() {
  return (
    <div className='flex flex-col w-full max-w-[390px] md:max-w-[1120px] '> <Navbar />
            <div className='flex flex-col w-full max-w-[390px] md:max-w-[1120px] px-4 max-md:px-8 bg-white'>
            
        <CityHeader/>
        <CityBody />
        <Carousel />
        <ShowMoreButton />
        <CityMusic />
        <Carousel />
        <ShowMoreButton bgColor="bg-[#00CA44]" hoverColor="hover:bg-[#00CA44]" />
        <Footer />
      </div>
    </div>
  );
}