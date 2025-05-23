import { servicesTwo } from "@/data/services";
import { TextSplit, Title } from "@/Reuseable";
import dynamic from "next/dynamic";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleServicesTwo from "./SingleServicesTwo";

const TinySlider = dynamic(() => import("../TinySlider/TinySlider"), {
  ssr: false,
});

const options = {
  loop: true,
  lazyload: true,
  nav: true,
  navPosition: "bottom",
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
    800: {
      items: 2,
      gutter: 30,
    },
    1000: {
      items: 3,
      gutter: 30,
    },
  },
};

const { title, text, services } = servicesTwo;

const ServicesTwo = () => {
  return (
    <section className="services-two">
      <Container>
        <Title
          title={title}
          text={<TextSplit text={text} />}
          className="text-center"
        />
        <Row>
          <Col xl={12}>
            <div className="services-two__carousel owl-dot-type1">
              <TinySlider options={options}>
                {services.map((service) => (
                  <SingleServicesTwo service={service} key={service.id} />
                ))}
              </TinySlider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesTwo;
