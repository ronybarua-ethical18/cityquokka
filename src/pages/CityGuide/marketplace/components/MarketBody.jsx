import React from "react";
import ArticleSidebar from "../../Article/components/ArticleSidebar";
import MarketHeader from "./MarketHeader";

export default function MarketBody() {
    return (
        <main className="w-full relative pb-10">
            <div className="w-full flex justify-center max-sm:hidden"></div>
            <div className="max-w-[1120px] mx-auto px-4 max-sm:px-2">
                <article className="w-full max-w-[960px] max-md:w-full">
                    <div className="w-full max-w-[960px] max-lg:w-full">
                        <MarketHeader />
                    </div>
                    <div className="text-[24px] leading-[135%] tracking-[-0.9px] font-inter font-[281] text-black text-justify capitalize mt-8 max-w-[960px] max-sm:max-w-[330px]">
                        <p><strong>Sydney's Christmas Markets</strong> <br /><br />
                            &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;       Nothing says holiday cheer like a festive Christmas market, and Sydney offers some of the best. Stroll through The Rocks Christmas Markets, where you can browse unique gifts from local artisans, taste delicious holiday treats, and enjoy live music. The market's location, set against the backdrop of the iconic Sydney Harbour Bridge and the Opera House, makes it a must-visit.</p>
                    
                           <br /> <p><strong>Top picks :</strong> 
                            <li>The Rocks Christmas Markets</li>
                            <li>Carriageworks Christmas Market: For fresh, local produce and gourmet Christmas food shopping.</li>
                            <li>The QVB Building: Marvel at the grand 24-meter Christmas tree adorned with Swarovski crystals.</li>
                            
                            </p></div>
                </article>
            </div>

            <aside className="absolute top-[180px] right-0 max-lg:relative max-lg:mt-8">
                <ArticleSidebar />
            </aside>
            <div className="h-[30px]"></div>
            <div className="w-full h-[4px] bg-[#EFEFEF] max-w-[300px] mx-auto sm:max-w-[300px]"></div>

        </main>
    );
}
