import { mainSliderTwo } from "@/data/mainSlider";
import React from "react";
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleSlider from "./SingleSlider";

SwiperCore.use([EffectFade, Autoplay, Pagination]);

const options = {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  pagination: {
    el: "#main-slider-pagination",
    type: "bullets",
    clickable: true,
  },
  autoplay: {
    delay: 7000,
  },
};

const MainSliderTwo = () => {
  return (
    <section className="main-slider main-slider-one main-slider-one--two">
      <Swiper {...options} className="thm-swiper__slider">
        <div className="swiper-wrapper">
          {mainSliderTwo.map((slide) => (
            <SwiperSlide key={slide.id}>
              <SingleSlider slide={slide} sliderTwo />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default MainSliderTwo;
