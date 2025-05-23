import { servicesTwo } from "@/data/services";
import { TextSplit, Title } from "@/Reuseable";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleServicesTwo from "./SingleServicesTwo";

const { title, text, services } = servicesTwo;

const ServicesTwoTwo = () => {
  return (
    <section className="services-two services-two--services-two">
      <Container>
        <Title
          title={title}
          text={<TextSplit text={text} />}
          className="text-center"
        />
        <Row>
          {services.slice(0, 6).map((service) => (
            <Col xl={4} lg={4} md={6} key={service.id}>
              <SingleServicesTwo service={service} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesTwoTwo;
