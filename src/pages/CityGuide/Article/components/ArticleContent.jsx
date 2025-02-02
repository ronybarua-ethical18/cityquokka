import React from "react";
import SocialActions from "@/components/shared/SocialActions";

export default function ArticleContent({ 
  number = "1",
  title = "Sydney's Christmas Markets",
  image,
  date = "30 Oct 2024",
  location = "The Rocks",
  eventDate = "Sat, Dec 21, 2024",
  address = "3 Railway Street",
  area = "Rooty Hill, The Rocks",
  eventType = "Market",
  price = "Free",
  description = "oliday cheer like a festive Christmas market, and Sydney offers some of the best. Stroll through The Rocks Christmas Markets, where you can browse unique gifts from local artisans, taste delicious holiday treats, and enjoy live music.",
  topPicks = [
    "The Rocks Christmas Markets",
    "The QVB Building: Marvel at the grand 24-meter Christmas tree adorned with Swarovski crystals."
  ],
  additionalText = "There'll even be more than one nativity lobster, plus a jolly mood and a whole room full of festive cheer. That room is Sydney Coliseum Theatre, where Christmas Actually plays its 2024"
}) {
  return (
    <div className="mt-12 max-w-full w-[957px] max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow font-[281] max-md:mt-10 max-md:max-w-full">
            <div className="text-3xl tracking-tighter leading-10 text-black max-md:max-w-full">
              <span className="text-[50px] text-[#B8B8B8] font-inter font-[494] leading-[128%] tracking-[-1.5px] text-justify capitalize">{number}.&nbsp; </span>
              <span className="font-[494] inline-block w-[346.605px] h-[44px] flex-shrink-0 rounded-[6px] bg-[#EBEBEB] px-2 py-1">{title}</span>
              <br />
              <span className="text-2xl leading-10"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nothing says {description}</span>
              <br />
              <br />
              <span className="text-2xl text-black font-[375]">Top Picks:</span>
              <ul className="list-none">
                {topPicks.map((pick, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-2xl text-black mr-2">•</span>
                    <span className="text-2xl text-black">{pick}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-7 text-2xl tracking-tighter leading-8 text-neutral-500 max-md:mr-0.5 max-md:max-w-full">
              {additionalText}
            </div>
            <div className="mt-8">
              <button className="px-6 py-2 bg-[#C1C1C1C7] text-black rounded-lg hover:opacity-90 font-bold">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto w-full leading-none text-black font-[281] max-md:mt-10 max-md:max-w-full items-end">
            <div className="flex justify-end mb-4">
              <SocialActions />
            </div>
            <div className="flex relative flex-col items-start pt-2 pb-72 mt-3 max-w-full text-xl tracking-tight rounded-md min-h-[320px] w-[422px] max-md:pr-5 max-md:pb-24">
              <img
                loading="lazy"
                src={image}
                className="object-cover absolute inset-0 size-full"
                alt={title}
              />

              <div className="flex relative flex-col pt-0.5 pb-2 pl-3.5 -mb-14 max-w-full bg-green-500 rounded-md w-[225px] max-md:mb-2.5">
                <div className="self-start mr-0">
                  {date} <span className="font-[375]">{location}</span>
                </div>
              </div>
            </div>
            <div className="mt-5 text-2xl tracking-tighter leading-10 max-md:max-w-full w-[422px]">
              <span className="font-[494] text-neutral-500">Date: </span>
              <span className="text-neutral-500">{eventDate}</span>
              <br />
              <span className="font-[494] text-neutral-500">Place: </span>
              <span className="text-neutral-500">{address} </span>
              <a
                href=""
                className="underline text-neutral-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                {area}
              </a>
              <br />
              <span className="font-[494] text-neutral-500">Event Type:</span>
              <span className="text-neutral-500"> {eventType}</span>
              <br />
              <span className="font-[494] text-neutral-500">Price: </span>
              <span className="text-neutral-500">{price}</span>
            </div>
            <div className="flex flex-col mt-[105px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="159" height="53" viewBox="0 0 159 53" fill="none">
                <path d="M106.671 30.0823L103.639 24.2612L103.493 23.9801C103.027 23.0852 103.37 21.9819 104.261 21.5092L141.347 1.84143C142.248 1.36369 143.365 1.71122 143.836 2.61557L146.952 8.59784C147.421 9.49745 147.075 10.6527 146.439 11.4433C145.385 12.7554 144.493 14.8786 145.641 17.0815C146.17 18.0972 147.029 18.7465 147.971 19.1474C149.426 19.7671 150.576 21.7347 149.694 23.0475L147.94 25.6573C147.847 25.7948 147.737 25.9192 147.611 26.0271L119.605 50.0374C118.707 50.807 117.326 50.5402 116.78 49.4915L112.785 41.8204C112.286 40.8624 112.762 39.6817 113.469 38.8652C114.347 37.8517 114.864 36.2603 113.731 34.0843C112.504 31.7286 110.632 31.1623 109.146 31.2346C108.176 31.2819 107.12 30.9437 106.671 30.0823Z" fill="#FFB200" stroke="#EFEFEF" strokeWidth="1.8366"/>
                <path d="M128.038 9.30029L143.014 38.0536" stroke="#EFEFEF" strokeWidth="1.8366" strokeLinecap="round" strokeDasharray="5.51 5.51"/>
                <path d="M1.89551 27.2121V20.6487V20.3454C1.89551 19.3311 2.71778 18.5088 3.73211 18.5088H153.191C154.205 18.5088 155.028 19.3311 155.028 20.3454V27.1042C155.028 28.1185 154.187 28.9835 153.259 29.3911C151.717 30.0676 149.946 31.5389 149.946 34.0227C149.946 36.2637 151.716 37.8447 153.197 38.6909C153.868 39.074 154.359 39.7527 154.359 40.525V49.5724C154.359 50.5867 153.537 51.409 152.523 51.409H3.73211C2.71778 51.409 1.89551 50.5867 1.89551 49.5724V40.4469C1.89551 39.3667 2.86352 38.5397 3.86786 38.1422C5.11457 37.6488 6.3081 36.4761 6.3081 34.0227C6.3081 31.3666 4.90921 29.9995 3.55841 29.3775C2.67624 28.9712 1.89551 28.1833 1.89551 27.2121Z" fill="#FFB200" stroke="#EFEFEF" strokeWidth="1.8366"/>
                <path d="M137.927 18.9897L137.927 51.4095" stroke="#EFEFEF" strokeWidth="1.8366" strokeLinecap="round" strokeDasharray="5.51 5.51"/>
                <foreignObject x="20" y="17" width="120" height="30">
                  <div xmlns="http://www.w3.org/1999/xhtml" className="text-center text-black font-[494] text-lg">
                    Buy Ticket
                  </div>
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[50px]"></div>
      <div className="w-[960px] h-[4px] bg-[#EFEFEF]"></div>
    </div>
  );
} 