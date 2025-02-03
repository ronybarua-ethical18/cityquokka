import React from "react";
import ArticleBody from "./components/ArticleBody";
import ArticleMore from "./components/ArticleMore";
import Footer from "../../../components/layout/Footer";
import MarketSidebar from "../marketplace/components/MarketSidebar";
import CityHeader from "../components/CityHeader";

export default function ArticlePage() {
  return (
    <div className='flex flex-col w-full max-w-[390px] md:max-w-[1120px] '> <CityHeader />
            <div className='flex flex-col w-full max-w-[390px] md:max-w-[1120px] px-4 max-md:px-8 bg-white'></div>
      <ArticleBody />
      <ArticleMore /><div className="px-8"><MarketSidebar /></div>
      <Footer />
      
      



    </div>

  );
}