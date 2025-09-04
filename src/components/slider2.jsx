// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// export default function Banner2() {
//   const banners = [
//     {
//       title: "Fast Delivery.",
//       subtitle: "your project will be delivered within 3 days...",
//       // offer: "UP to 80% OFF",
//       image: "mapbg.png",
//     },
//     {
//       title: "Best Projects",
//       subtitle: "Projects available at lowest price...",
//       offer: "Starting from ₹250",
//       image: "imgforbanner.png",
//     },
//     {
//       title: "Electronic Compponents",
//       subtitle: "Components & sensors available at lowest price",
//       offer: "UP to 50% OFF",
//       image: "electrocomp.png",
//     },
//   ];

//   return (
//     <div className="h-[280px] w-[90%] mx-auto p-2 relative "> {/* reduced width & height */}
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         navigation={{
//           nextEl: ".custom-next",
//           prevEl: ".custom-prev",
//         }}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000 }}
//         loop
//         className="bg-gradient-to-r from-purple-900 to-gray-900 text-white rounded-xl h-full w-full"
//       >
//         {banners.map((banner, index) => (
//           <SwiperSlide key={index}>
//             <div className="flex justify-between items-center px-[80px] h-full"> 
//               {/* Text Section */}
//               <div>
//                 <p className="text-xs text-gray-300">{banner.subtitle}</p>
//                 <h2 className="text-3xl font-bold mt-1">{banner.title}</h2>
//                 <p className="text-base mt-2">{banner.offer}</p>
//               </div>

//               {/* Image Section */}
//               <div>
//                 <img
//                   src={banner.image}
//                   alt={banner.title}
//                   className="w-50 h-auto object-contain" /* smaller image */
//                 />
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Navigation Buttons */}
//       <button className="custom-prev absolute top-1/2 -translate-y-1/2  bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10 ml-2">
//         <span className="text-black flex items-center justify-center text-2xl leading-none pb-2">‹</span>
//       </button>
//       <button className="custom-next absolute top-1/2 -translate-y-1/2 right-2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10 mr-2">
//         <span className="text-black flex items-center justify-center text-2xl leading-none pb-2">›</span>
//       </button>
//     </div>
//   );
// }


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
      subtitle: "Your project will be delivered within 3 days...",
      image: "mapbg.png",
    },
    {
      title: "Best Projects",
      subtitle: "Projects available at lowest price...",
      offer: "Starting from ₹250",
      image: "imgforbanner.png",
    },
    {
      title: "Electronic Components",
      subtitle: "Components & sensors available at lowest price",
      offer: "UP to 50% OFF",
      image: "electrocomp.png",
    },
  ];

  return (
    <div className="w-[95%] md:w-[90%] mx-auto p-2 relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="bg-gradient-to-r from-purple-900 to-gray-900 text-white rounded-xl h-[200px] sm:h-[260px] md:h-[300px] lg:h-[360px]"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 lg:px-20 h-full">
              {/* Text Section */}
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-xs sm:text-sm text-gray-300">
                  {banner.subtitle}
                </p>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-1 text-yellow-400">
                  {banner.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg mt-2">
                  {banner.offer}
                </p>
              </div>

              {/* Image Section */}
              <div>
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-28 sm:w-40 md:w-56 lg:w-72 h-auto object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="custom-prev absolute top-1/2 -translate-y-1/2 left-2 bg-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg z-10">
        <span className="text-black text-xl sm:text-2xl">‹</span>
      </button>
      <button className="custom-next absolute top-1/2 -translate-y-1/2 right-2 bg-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg z-10">
        <span className="text-black text-xl sm:text-2xl">›</span>
      </button>
    </div>
  );
}
