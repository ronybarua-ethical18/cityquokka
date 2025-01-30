import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CityHeader from "@/pages/CityGuide/CityHeader";
import Carousel from "@/components/shared/Carousel";
import ShowMoreButton from '@/components/shared/ShowMoreButton';
import CityBody from "@/pages/CityGuide/CityBody";
import CityMusic from "@/pages/CityGuide/CityMusic";

export default function CityGuide() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-col self-center w-full max-w-[1120px] max-md:max-w-full bg-white flex-grow">
        <CityHeader />
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