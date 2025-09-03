import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Banner2() {
  const banners = [
    {
      title: "Fast Delivery.",
      subtitle: "your project will be delivered within 3 days...",
      // offer: "UP to 80% OFF",
      image: "mapbg.png",
    },
    {
      title: "Best Projects",
      subtitle: "Projects available at lowest price...",
      offer: "Starting from ₹250",
      image: "imgforbanner.png",
    },
    {
      title: "Electronic Compponents",
      subtitle: "Components & sensors available at lowest price",
      offer: "UP to 50% OFF",
      image: "electrocomp.png",
    },
  ];

  return (
    <div className="h-[280px] w-[90%] mx-auto p-2 relative "> {/* reduced width & height */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="bg-gradient-to-r from-purple-900 to-gray-900 text-white rounded-xl h-full w-full"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-between items-center px-[80px] h-full"> 
              {/* Text Section */}
              <div>
                <p className="text-xs text-gray-300">{banner.subtitle}</p>
                <h2 className="text-3xl font-bold mt-1">{banner.title}</h2>
                <p className="text-base mt-2">{banner.offer}</p>
              </div>

              {/* Image Section */}
              <div>
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-50 h-auto object-contain" /* smaller image */
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="custom-prev absolute top-1/2 -translate-y-1/2  bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10 ml-2">
        <span className="text-black flex items-center justify-center text-2xl leading-none pb-2">‹</span>
      </button>
      <button className="custom-next absolute top-1/2 -translate-y-1/2 right-2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10 mr-2">
        <span className="text-black flex items-center justify-center text-2xl leading-none pb-2">›</span>
      </button>
    </div>
  );
}
