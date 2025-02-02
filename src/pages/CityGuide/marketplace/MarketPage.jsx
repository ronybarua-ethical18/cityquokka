import React from "react";
import MarketBody from "./components/MarketBody";
import Footer from "../../../components/layout/Footer";
import MarketContent from "./components/MarketContent";
import MarketMapContent from "./components/MarketMapContent";

export default function MarketPage() {
  return (
    <div className="flex flex-col w-full">
      <MarketBody />
      <MarketContent />
      <MarketMapContent />

      <Footer />
    </div>


  );
}