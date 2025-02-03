import React from "react";
import ArticleSidebar from "./ArticleSidebar";
import ArticleHeader from "./ArticleHeader";

export default function ArticleBody() {
  return (
    <main className="w-full relative px-2">
      {/* City Header */}
      <div className="w-full flex justify-center max-sm:hidden">
        
      </div>
      <div className="max-w-[1120px] mx-auto px-4 max-sm:px-2">
        <article className="w-[740px] max-md:w-full">
          <div className="w-[956.701px] max-lg:w-full">
            <ArticleHeader />
          </div>
          {/* Article Text */}
          <div className="text-[30px] leading-[135%] tracking-[-0.9px] font-inter font-[281] text-black text-justify capitalize mt-8 sm:text-[20px] sm:leading-[1.5] sm:tracking-[-0.5px] sm:text-left">
            <p className="mb-4 sm:mb-3 sm:w-full">
              &nbsp;&nbsp;&nbsp;Sydney, Australia, is a vibrant city filled with iconic landmarks, stunning beaches, and a rich cultural scene that truly comes alive during the holiday season. December is the perfect time to visit, as summer begins in the Southern Hemisphere and Sydney's social calendar is packed with festive events, outdoor adventures, and exciting activities.
            </p>

            <p className="mb-4 sm:mb-3 sm:w-full">
              Whether you're a local looking to enjoy the season or a visitor wanting to experience the best of Sydney, here are the top things to do in December.
            </p>
          </div>
          <div className="h-[150px] sm:h-[100px]"></div>
          <div className="w-full h-[4px] bg-[#EFEFEF] sm:h-[2px] max-w-[330px] sm:max-w-[960px] mx-auto"></div>
        </article>
      </div>
      {/* Article Sidebar */}
      <aside className="absolute top-[180px] right-0 max-lg:relative max-lg:mt-8">
        <ArticleSidebar />
      </aside>
    </main>
  );
}
