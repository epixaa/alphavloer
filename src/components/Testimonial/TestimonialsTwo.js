import { testimonialsTwo } from "@/data/testimonial";
import { Title } from "@/Reuseable";
import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import SwiperCore, { Autoplay, Controller, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Controller, Pagination]);

const options = {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 1400,
  watchSlidesProgress: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: "#testimonials-one-pagination",
    type: "bullets",
    clickable: true,
  },
};

const controller = (swiper) => ({
  control: swiper?.destroyed ? null : swiper,
});

const TestimonialImage = ({ image }) => {
  return (
    <div className="testimonials-one__image">
      <div className="testimonials-one__image__inner">
        <Image src={image.src} alt="" />
      </div>
    </div>
  );
};

const TestimonialsOneContent = ({ testimonial = {} }) => {
  const { text, name, tagline } = testimonial;

  return (
    <div className="testimonials-one__content">
      <p className="testimonials-one__text">{text}</p>
      <h3 className="testimonials-one__name">{name}</h3>
      <p className="testimonials-one__designation">{tagline}</p>
    </div>
  );
};

const { tagline, title, testimonials } = testimonialsTwo;

const TestimonialsTwo = () => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <section className="testimonials-one">
      <Container>
        <Row>
          <Col lg={6}>
            <Swiper
              {...options}
              onSwiper={setFirstSwiper}
              controller={controller(secondSwiper)}
              id="testimonials-one__thumb"
            >
              <div className="swiper-wrapper">
                {testimonials.map(({ image, id }) => (
                  <SwiperSlide key={id}>
                    <TestimonialImage image={image} />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </Col>
          <Col lg={6}>
            <Title tagline={tagline} title={title} className="text-left" />
            <Swiper
              onSwiper={setSecondSwiper}
              controller={controller(firstSwiper)}
              id="testimonials-one__carousel"
              {...options}
            >
              <div className="swiper-wrapper">
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <TestimonialsOneContent testimonial={testimonial} />
                  </SwiperSlide>
                ))}
              </div>
              <div
                className="swiper-pagination"
                id="testimonials-one-pagination"
              ></div>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsTwo;
