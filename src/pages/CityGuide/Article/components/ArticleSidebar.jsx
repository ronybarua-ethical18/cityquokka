import React from "react";

export default function ArticleSidebar() {
  return (
    <aside className="w-[320px] max-md:w-full hidden lg:block">
      <div className="relative bg-[#FFC53D] rounded-md pt-12 px-9 pb-14">
        <div className="absolute left-1/2 -translate-x-1/2 -top-4">
          <div className="px-3 py-2 bg-white rounded-lg border-black border-solid border-[3px] font-bold font-inter">
            Recommended
          </div>
        </div>
        <div className="space-y-8">
          {[1, 2, 3, 4].map((index) => (
            <div key={index}>
              <p className="font-inter text-[16px] tracking-tighter font-[596] mb-4">
                Discover places and find a variety of global cuisines to satisfy your cravings.
              </p>
              <div className="h-[156px] bg-zinc-300 w-full" />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}