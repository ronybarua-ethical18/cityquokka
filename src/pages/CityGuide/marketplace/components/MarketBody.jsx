import React from "react";
import ArticleSidebar from "../../Article/components/ArticleSidebar";
import CityHeader from "../../components/CityHeader";
import MarketHeader from "./MarketHeader";


export default function MarketBody() {
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
                        <MarketHeader />
                    </div>
                    <div className="text-[24px] leading-[135%] tracking-[-0.9px] font-inter font-[281] text-black text-justify capitalize mt-8">
                        <p className="mb-4 w-[960px]"><strong>Sydney's Christmas Markets</strong> <br /> <br />


                            &nbsp;&nbsp;&nbsp;Nothing says holiday cheer like a festive Christmas market, and Sydney offers some of the best. Stroll through The Rocks Christmas Markets, where you can browse unique gifts from local artisans, taste delicious holiday treats, and enjoy live music. The market's location, set against the backdrop of the iconic Sydney Harbour Bridge and the Opera House, makes it a must-visit.</p>

                        <p className="mb-4 w-[960px]">
                        Top Picks: <br /> <br /> 
                        <li>The Rocks Christmas Markets</li> 
                        <li>Carriageworks Christmas Market: For fresh, local produce and gourmet Christmas food shopping.</li> 
                        <li>The QVB Building: Marvel at the grand 24-meter Christmas tree adorned with Swarovski crystals.</li> 
                        </p>
                    </div>
                   
                </article>
            </div>
            <aside className="absolute top-[180px] right-0 max-lg:relative max-lg:mt-8">
                <ArticleSidebar />
            </aside>

        </main>
    );
}

