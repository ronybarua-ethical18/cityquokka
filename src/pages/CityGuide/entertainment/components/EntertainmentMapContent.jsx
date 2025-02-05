import React from "react";
import MarketSidebar from "../../marketplace/components/MarketSidebar";

export default function EntertainmentMapContent() {
  return (
    <main className="w-full relative pt-20">
      <div className="w-full flex justify-center max-sm:hidden"></div>
      <div className="max-w-[1120px] mx-auto px-4 max-sm:px-2">
        <article className="w-[740px] max-md:w-full">
          <div className="w-[956.701px] max-lg:w-full">
            <div className="flex flex-col py-0.5 mt-4 w-full text-black font-inter max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-4 mt-4 max-lg:flex-col">
                <div className="flex-1">
                  <div className="mt-5 text-2xl tracking-tighter leading-10 max-md:max-w-full w-[422px]">
                    <span className="font-[494] text-neutral-500">Date: Sat, Dec 21, 2024 </span>
                    <br />
                    <span className="font-[494] text-neutral-500">Place : 3 Railway Street Rooty Hill, The Rocks </span>
                    <br />
                    <span className="font-[494] text-neutral-500">Event Type : Market</span>
                    <br />
                    <span className="font-[494] text-neutral-500">Price: Free </span>
                    <br />
                    <span className="font-[494] text-neutral-500">Web </span>
                  </div>
                </div>
                <div className="relative w-[529.701px] h-[350.29px] max-lg:w-full max-lg:h-auto max-lg:aspect-[1.51]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26532.449767537553!2d150.844998!3d-33.77213185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129a3c5c1896a7%3A0x5017d681632c8e0!2sRooty%20Hill%20NSW%202766%2C%20Australia!5e0!3m2!1sen!2sbd!4v1738737160210!5m2!1sen!2sbd"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className="pt-10">
          <MarketSidebar />
        </div>
      </div>
    </main>
  );
}
