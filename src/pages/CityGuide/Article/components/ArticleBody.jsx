import React from "react";
import ArticleSidebar from "./ArticleSidebar";
import ArticleHeader from "./ArticleHeader";
import CityHeader from "../../components/CityHeader";
import SocialActions from "@/components/shared/SocialActions";

export default function ArticleBody() {
  return (
    <main className="w-full relative">
      <div className="w-full flex justify-center max-sm:hidden">
        <div className="max-w-[1120px] w-full px-4">
          <CityHeader />
        </div>
      </div>
      <div className="max-w-[1120px] mx-auto px-4 max-sm:px-2">
        <article className="w-[740px] max-md:w-full">
          <div className="w-[956.701px] max-lg:w-full">
            <ArticleHeader />
          </div>
          <div className="text-[30px] leading-[135%] tracking-[-0.9px] font-inter font-[281] text-black text-justify capitalize mt-8">
            <p className="mb-4 w-[960px]">
              &nbsp;&nbsp;&nbsp;Sydney, Australia, is a vibrant city filled with iconic landmarks, stunning beaches, and a rich cultural scene that truly comes alive during the holiday season. December is the perfect time to visit, as summer begins in the Southern Hemisphere and Sydney's social calendar is packed with festive events, outdoor adventures, and exciting activities.
            </p>

            <p className="mb-4 w-[960px]">
              Whether you're a local looking to enjoy the season or a visitor wanting to experience the best of Sydney, here are the top things to do in December.
            </p>
          </div>
          <div className="h-[150px]"></div>
          <div className="w-[960px] h-[4px] bg-[#EFEFEF]"></div>
        </article>
      </div>
      <aside className="absolute top-[180px] right-0 max-lg:relative max-lg:mt-8">
        <ArticleSidebar />
      </aside>
      
    </main>
  );
}

