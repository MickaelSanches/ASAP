import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const slides = [
  "/img/c1.webp",
  "/img/c2.webp",
  "/img/c3.webp",
  "/img/c4.webp",
  "/img/c5.webp",
  "/img/c6.webp",
  "/img/c7.webp",
  "/img/c8.webp",
];

const Carousel = () => {
  return (
    <div className="bg-black text-white flex justify-center items-center h-[600px] w-full">
      <Swiper
        grabCursor
        centeredSlides
        slidesPerView="auto"
        effect="coverflow"
        loop
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide}
            style={{
              backgroundImage: `url(${slide})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: "300px",
              height: "300px",
              WebkitBoxReflect: "below 1px linear-gradient(transparent, transparent, #0006)",
            }}
          />
        ))}
      </Swiper>
      <style>{`
        .swiper-button-prev, .swiper-button-next, .swiper-slide {
          cursor: none;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
