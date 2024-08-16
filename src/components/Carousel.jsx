import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const slides = [
  "https://i.postimg.cc/Z0ktfskN/peter-broomfield-m3m-ln-R90u-M-unsplash.jpg",
  "https://i.postimg.cc/MTTSXjbn/brandon-atchison-e-BJWhlq-WR54-unsplash.jpg",
  "https://i.postimg.cc/8cfgmQYD/campbell-3-ZUs-NJhi-Ik-unsplash.jpg",
  "https://i.postimg.cc/8Ck5BcmS/evgeny-tchebotarev-aiwu-Lj-LPFn-U-unsplash.jpg",
  "https://i.postimg.cc/66F8J9tr/hakon-sataoen-qyfco1nf-Mtg-unsplash.jpg",
  "https://i.postimg.cc/ydbzRYvv/joey-banks-YApi-Wyp0lqo-unsplash.jpg",
  "https://i.postimg.cc/NGKKzyqG/joshua-koblin-eq-W1-MPin-EV4-unsplash.jpg",
  "https://i.postimg.cc/JhK81QJw/marcus-p-o-UBjd22g-F6w-unsplash.jpg",
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
              backgroundSize: "cover",
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
