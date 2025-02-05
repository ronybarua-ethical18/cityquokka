import React from "react";
import MarketBody from "./components/MarketBody";
import Footer from "../../../components/layout/Footer";
import MarketContent from "./components/MarketContent";
import MarketMapContent from "./components/MarketMapContent";
import CityHeader from "../components/CityHeader";
import Navbar from "@/components/layout/Navbar";

export default function MarketPage() {
  return (
    <>
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="flex flex-col w-full px-8 sm:px-0">
          <div className="max-w-[1120px] mx-auto w-full"> {/* Added max-w and mx-auto */}
            <CityHeader />
          </div>
          <MarketBody />
          <MarketContent />
          <MarketMapContent />
        </div>
        <Footer />
      </div>
    </>
  );
}