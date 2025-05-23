import { testimonialOne } from "@/data/testimonial";
import { TextSplit, Title } from "@/Reuseable";
import dynamic from "next/dynamic";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleTestimonialOne from "./SingleTestimonialOne";

const TinySlider = dynamic(() => import("../TinySlider/TinySlider"), {
  ssr: false,
});

const options = {
  loop: true,
  lazyload: true,
  nav: false,
  speed: 500,
  mouseDrag: true,
  items: 1,
  gutter: 0,
  autoplay: true,
  autoHeight: true,
  controls: false,
  autoplayButton: false,
  autoplayButtonOutput: false,
  responsive: {
    1000: {
      items: 2,
      gutter: 30,
    },
  },
};

const { tagline, title, testimonials } = testimonialOne;

const TestimonialOne = () => {
  return (
    <section className="testimonial-one">
      <Container>
        <Title tagline={tagline} className="text-center">
          <TextSplit text={title} />
        </Title>
        <Row>
          <Col xl={12}>
            <div className="testimonial-one__carousel">
              <TinySlider options={options}>
                {testimonials.map((testimonial) => (
                  <SingleTestimonialOne
                    key={testimonial.id}
                    testimonial={testimonial}
                  />
                ))}
              </TinySlider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialOne;
