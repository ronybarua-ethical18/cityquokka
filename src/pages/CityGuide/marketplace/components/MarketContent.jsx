import React from "react";
import MarketHeaderImage1 from "../../../../assets/marktetHeaderImage1.png"; // First image


export default function MarketBody() {
    return (
        <main className="w-full relative pt-10">
            <div className="w-full flex justify-center max-sm:hidden"></div>
            <div className="max-w-[1120px] mx-auto px-4 max-sm:px-2">
                <article className="w-[740px] max-md:w-full">

                    <div className="w-[956.701px] max-lg:w-full">
                        <div className="flex flex-col py-0.5 mt-4 w-full text-black font-inter max-md:mt-10 max-md:max-w-full">
                            <div className="flex flex-wrap gap-5 justify-between mt-4 w-full leading-none max-md:max-w-full"></div>
                            <div className="flex gap-4 mt-4 max-lg:flex-col">
                                {/* First Image */}
                                <div className="relative w-[466px] h-[390px] max-lg:w-full max-lg:h-auto max-lg:aspect-[1.2]">
                                    <img
                                        loading="lazy"
                                        src={MarketHeaderImage1}
                                        className="object-cover absolute inset-0 w-full h-full"
                                        alt="Article header image 1"
                                    />
                                </div>
                                {/* Second Image */}
                                <div className="relative w-[466px] h-[390px] max-lg:w-full max-lg:h-auto max-lg:aspect-[1.2]">
                                    <img
                                        loading="lazy"
                                        src={MarketHeaderImage1}
                                        className="object-cover absolute inset-0 w-full h-full"
                                        alt="Article header image 2"
                                    />
                                </div>
                            </div>

                            <div className="text-[30px] leading-[135%] tracking-[-0.9px] font-inter font-[281] text-black text-justify capitalize mt-8">
                                There'll even be more than one nativity lobster, plus a jolly mood and a whole room full of festive cheer. That room is Sydney Coliseum Theatre, where Christmas Actually plays its 2024 Harbour City date on Saturday, December 21.There'll even be more than one nativity lobster, plus a jolly mood and a whole room full of festive cheer. That room is Sydney Coliseum Theatre, where Christmas Actually plays its 2024 Harbour City date on Saturday, December 21. <br />

                                There'll even be more than one nativity lobster, plus a jolly mood and a whole room full of festive cheer. That room is Sydney Coliseum Theatre, where Christmas Actually plays its 2024 Harbour City date on Saturday, December 21.


                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
}