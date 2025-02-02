import React from "react";
import ArticleContent from "./ArticleContent";
import SydnetConcert from "@/assets/SydnetConcert.png";

export default function ArticleMore() {
  const commonContent = {
    description: "oliday cheer like a festive Christmas market, and Sydney offers some of the best. Stroll through The Rocks Christmas Markets, where you can browse unique gifts from local artisans, taste delicious holiday treats, and enjoy live music.",
    topPicks: [
      "The Rocks Christmas Markets",
      "The QVB Building: Marvel at the grand 24-meter Christmas tree adorned with Swarovski crystals."
    ],
    additionalText: "There'll even be more than one nativity lobster, plus a jolly mood and a whole room full of festive cheer. That room is Sydney Coliseum Theatre, where Christmas Actually plays its 2024",
    date: "30 Oct 2024",
    location: "The Rocks",
    eventDate: "Sat, Dec 21, 2024",
    address: "3 Railway Street",
    area: "Rooty Hill, The Rocks",
    eventType: "Market",
    price: "Free",
    image: SydnetConcert,
  };

  const articlesData = [
    {
      number: "1",
      title: "Sydney's Christmas Markets",
      ...commonContent
    },
    {
      number: "2",
      title: "New Year's Eve Fireworks",
      ...commonContent
    },
    {
      number: "3",
      title: "NYE Harbour Spectacular",
      ...commonContent
    },
    {
      number: "4",
      title: "Christmas Light Festival",
      ...commonContent
    },
    {
      number: "5",
      title: "Santa's Christmas Village",
      ...commonContent
    }
  ];

  return (
    <div className="max-w-[1120px] mx-auto px-4 max-sm:px-2">
      <article className="w-[960px] max-md:w-full -ml-[125px] max-lg:ml-0">
        {articlesData.map((article, index) => (
          <ArticleContent key={index} {...article} />
        ))}
      </article>
    </div>
  );
}
