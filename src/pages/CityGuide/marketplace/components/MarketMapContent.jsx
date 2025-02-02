import React from "react";
import Map from "../../../../assets/map.png"; // First image


export default function MarketBody() {
    return (
        <main className="w-full relative pt-20">
            <div className="w-full flex justify-center max-sm:hidden"></div>
            <div className="max-w-[1120px] mx-auto px-4 max-sm:px-2">
                <article className="w-[740px] max-md:w-full">
                    <div className="w-[956.701px] max-lg:w-full">
                        <div className="flex flex-col py-0.5 mt-4 w-full text-black font-inter max-md:mt-10 max-md:max-w-full">
                            <div className="flex flex-wrap gap-5 justify-between mt-4 w-full leading-none max-md:max-w-full"></div>
                            <div className="flex gap-4 mt-4 max-lg:flex-col">
                                {/* Left Side - Text */}
                                <div className="flex-1">
                                    <div className="mt-5 text-2xl tracking-tighter leading-10 max-md:max-w-full w-[422px]">
                                        <span className="font-[494] text-neutral-500">Date: Sat, Dec 21, 2024 </span>
                                        <span className="text-neutral-500"></span>
                                        <br />
                                        <span className="font-[494] text-neutral-500">Place : 3 Railway Street Rooty Hill, The Rocks </span>
                                        <span className="text-neutral-500"> </span>
                                        <a
                                            href=""
                                            className="underline text-neutral-500"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            
                                        </a>
                                        <br />
                                        <span className="font-[494] text-neutral-500">Event Type : Market</span>
                                        <span className="text-neutral-500"> </span>
                                        <br />
                                        <span className="font-[494] text-neutral-500">Price: Free </span>
                                        <span className="text-neutral-500"></span>
                                        <br />
                                        <span className="font-[494] text-neutral-500">Web </span>
                                        <span className="text-neutral-500"></span>
                                        

                                    </div>
                                    <div className="flex flex-col mt-[80px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="159" height="53" viewBox="0 0 159 53" fill="none">
                                            <path d="M106.671 30.0823L103.639 24.2612L103.493 23.9801C103.027 23.0852 103.37 21.9819 104.261 21.5092L141.347 1.84143C142.248 1.36369 143.365 1.71122 143.836 2.61557L146.952 8.59784C147.421 9.49745 147.075 10.6527 146.439 11.4433C145.385 12.7554 144.493 14.8786 145.641 17.0815C146.17 18.0972 147.029 18.7465 147.971 19.1474C149.426 19.7671 150.576 21.7347 149.694 23.0475L147.94 25.6573C147.847 25.7948 147.737 25.9192 147.611 26.0271L119.605 50.0374C118.707 50.807 117.326 50.5402 116.78 49.4915L112.785 41.8204C112.286 40.8624 112.762 39.6817 113.469 38.8652C114.347 37.8517 114.864 36.2603 113.731 34.0843C112.504 31.7286 110.632 31.1623 109.146 31.2346C108.176 31.2819 107.12 30.9437 106.671 30.0823Z" fill="#FFB200" stroke="#EFEFEF" strokeWidth="1.8366" />
                                            <path d="M128.038 9.30029L143.014 38.0536" stroke="#EFEFEF" strokeWidth="1.8366" strokeLinecap="round" strokeDasharray="5.51 5.51" />
                                            <path d="M1.89551 27.2121V20.6487V20.3454C1.89551 19.3311 2.71778 18.5088 3.73211 18.5088H153.191C154.205 18.5088 155.028 19.3311 155.028 20.3454V27.1042C155.028 28.1185 154.187 28.9835 153.259 29.3911C151.717 30.0676 149.946 31.5389 149.946 34.0227C149.946 36.2637 151.716 37.8447 153.197 38.6909C153.868 39.074 154.359 39.7527 154.359 40.525V49.5724C154.359 50.5867 153.537 51.409 152.523 51.409H3.73211C2.71778 51.409 1.89551 50.5867 1.89551 49.5724V40.4469C1.89551 39.3667 2.86352 38.5397 3.86786 38.1422C5.11457 37.6488 6.3081 36.4761 6.3081 34.0227C6.3081 31.3666 4.90921 29.9995 3.55841 29.3775C2.67624 28.9712 1.89551 28.1833 1.89551 27.2121Z" fill="#FFB200" stroke="#EFEFEF" strokeWidth="1.8366" />
                                            <path d="M137.927 18.9897L137.927 51.4095" stroke="#EFEFEF" strokeWidth="1.8366" strokeLinecap="round" strokeDasharray="5.51 5.51" />
                                            <foreignObject x="20" y="17" width="120" height="30">
                                                <div xmlns="http://www.w3.org/1999/xhtml" className="text-center text-black font-[494] text-lg">
                                                    Buy Ticket
                                                </div>
                                            </foreignObject>
                                        </svg>
                                    </div>
                                </div>
                                {/* Right Side - Image */}
                                <div className="relative w-[529.701px] h-[350.29px] max-lg:w-full max-lg:h-auto max-lg:aspect-[1.51]">
                                    <img
                                        loading="lazy"
                                        src={Map}
                                        className="object-cover absolute inset-0 w-full h-full"
                                        alt="Article header image"
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
}