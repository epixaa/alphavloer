import { mainSlider } from "@/data/mainSlider";
import React from "react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleSlider from "./SingleSlider";

SwiperCore.use([EffectFade, Autoplay]);

const options = {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 7000,
  },
};

const MainSlider = () => {
  return (
    <section className="main-slider main-slider-one">
      <Swiper {...options} className="thm-swiper__slider">
        <div className="swiper-wrapper">
          {mainSlider.map((slide) => (
            <SwiperSlide key={slide.id}>
              <SingleSlider slide={slide} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default MainSlider;
