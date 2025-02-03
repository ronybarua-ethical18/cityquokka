import React from "react";
import MarketBody from "./components/MarketBody";
import Footer from "../../../components/layout/Footer";
import MarketContent from "./components/MarketContent";
import MarketMapContent from "./components/MarketMapContent";
import CityHeader from "../components/CityHeader";


export default function MarketPage() {
  return (
    <div className='flex flex-col w-full max-w-[390px] md:max-w-[1120px] '> <CityHeader />
            <div className='flex flex-col w-full max-w-[390px] md:max-w-[1120px] px-4 max-md:px-8 bg-white'>
      
      <MarketBody />
      <MarketContent />
      <MarketMapContent />
      
      

    </div><Footer /></div>
  );
}