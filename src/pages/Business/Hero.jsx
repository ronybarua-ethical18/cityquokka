import React from "react";

const Hero = () => {
    return (
        <section className="mt-32 ml-6 w-full max-w-screen-lg max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
                    <h1 className="text-7xl font-bold text-black leading-[80px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-9">
                        More customers, more often
                    </h1>
                </div>
                <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow mt-1.5 text-black max-md:mt-10 max-md:max-w-full">
                        <p className="text-3xl tracking-tighter leading-[37px] font-[494] font-inter w-full text-justify">
                            City Quokka provides free un-biased listings and private Customer analysis for your business. We do not enter into paid web or social media partnerships.

                        </p>

                        <button className="self-start px-16 py-3.5 mt-20 text-base font-bold tracking-tight leading-snug bg-yellow-500 rounded-lg border-black border-solid border-[3px] max-md:px-5 max-md:mt-10">
                            Book a free consult
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;