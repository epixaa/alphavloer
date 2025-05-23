import { servicesOne } from "@/data/services";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";
import TextSplit from "../Reuseable/TextSplit";
import Title from "../Reuseable/Title";

const { title, text, services } = servicesOne;

const ServicesOneSingle = ({ service = {} }) => {
  const { id, icon, title, text } = service;

  return (
    <Col xl={4} lg={4} className="animated fadeInLeft">
      <div className="services-one__single text-center">
        <div className={`services-one__single-icon bg${id}`}>
          <span className={icon}></span>
        </div>
        <h2>
          <Link href="/services-single-1">{title}</Link>
        </h2>
        <div className="text">
          <TextSplit text={text} as="p" />
        </div>
      </div>
    </Col>
  );
};

const ServicesOne = ({ itemsCount }) => {
  return (
    <section className="services-one clearfix">
      <Container>
        <Title
          title={title}
          className="text-center"
          text={<TextSplit text={text} />}
        />
        <Row>
          {services.slice(0, itemsCount).map((service) => (
            <ServicesOneSingle service={service} key={service.id} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesOne;
