import React from "react";
import ArticleBody from "./components/ArticleBody";
import ArticleMore from "./components/ArticleMore";
import Footer from "../../../components/layout/Footer";
import MarketSidebar from "../marketplace/components/MarketSidebar";
import CityHeader from "../components/CityHeader";
import Navbar from "@/components/layout/Navbar";

export default function ArticlePage() {
  return (
    <div className="flex flex-col w-full "> <Navbar />
      <div className="flex flex-col w-full px-8 sm:px-0"><CityHeader />
      <ArticleBody />
      <ArticleMore /></div>
      <div className="px-8"><MarketSidebar /></div>
      <Footer />
      
      



    </div>

  );
}