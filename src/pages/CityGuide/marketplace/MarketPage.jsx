import React from "react";
import MarketBody from "./components/MarketBody";
import Footer from "../../../components/layout/Footer";
import MarketContent from "./components/MarketContent";
import MarketMapContent from "./components/MarketMapContent";
import CityHeader from "../components/CityHeader";


export default function MarketPage() {
  return (<>
    <div className="flex flex-col w-full">
    <div className="flex flex-col w-full px-8 sm:px-0">
      <CityHeader />
      <MarketBody />
      <MarketContent />
      <MarketMapContent />
      
      

      

    </div><Footer />
    </div>
    </>
  );
}