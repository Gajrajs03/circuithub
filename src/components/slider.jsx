import React, { useState } from "react";
import slides from "../details/slides";
const Slider = () => {
  

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? slides.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === slides.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="relative w-[800px] overflow-hidden rounded-xl shadow-lg">
      {/* Slides container */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`min-w-full ${slide.bg} text-white flex justify-between items-center p-8 rounded-xl`}
          >
            <div>
              <p className="text-sm mb-2">{slide.subtitle}</p>
              <h1 className="text-3xl font-bold">{slide.title}</h1>
              <p className="mt-2 text-lg">{slide.offer}</p>

              {/* Dots indicator */}
              <div className="mt-6 flex space-x-2">
                {slides.map((_, dotIndex) => (
                  <span
                    key={dotIndex}
                    className={`h-2 rounded-full ${
                      index === dotIndex ? "w-6 bg-white" : "w-2 bg-gray-400"
                    }`}
                  ></span>
                ))}
              </div>
            </div>

            <img src={slide.img} alt={slide.title} className="w-52" />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
