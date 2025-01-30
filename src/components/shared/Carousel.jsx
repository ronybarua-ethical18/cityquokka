import React, { useState } from "react";
import BlogImage from "../../../src/assets/BlogImage.png";
import BlogImage2 from "../../../src/assets/BlogImage2.png";
import ArrowLeft from "../../../src/assets/ArrowLeft.svg";
import ArrowRight from "../../../src/assets/ArrowRight.svg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Global Flavors At Your Fingertips: A Foodie's Guide To UTS Food",
      image: BlogImage,
    },
    {
      id: 2,
      title: "Global Flavors At Your Fingertips: A Foodie's Guide To UTS Food",
      image: BlogImage2,
    },
    {
      id: 3,
      title: "Global Flavors At Your Fingertips: A Foodie's Guide To UTS Food",
      image: BlogImage2,
    },
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <div className="mt-8 flex justify-center items-center w-full">
        <div className="flex items-center justify-between max-w-[1000px] w-full">
          <button
            onClick={prevImage}
            className="p-2 bg-white rounded-full hover:bg-gray-300"
          >
            <img
              src={ArrowLeft}
              alt="Previous"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </button>

          <div className="grid grid-cols-3 gap-4 w-full">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`flex-shrink-0 w-full transition-transform duration-300 ${
                  index === currentIndex ? "scale-100" : "scale-95"
                }`}
              >
                <div className="overflow-hidden rounded-[6px]">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    width={288}
                    height={138}
                    className="object-cover"
                  />
                </div>
                <p className="text-xs mt-2 text-black max-w-[270px]">
                  {slide.title}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={nextImage}
            className="p-2 bg-white rounded-full hover:bg-gray-300"
          >
            <img
              src={ArrowRight}
              alt="Next"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;