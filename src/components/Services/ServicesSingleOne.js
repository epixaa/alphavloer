import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServicesSingleOneContent from "./ServicesSingleOneContent";
import ServicesSingleSidebar from "./ServicesSingleSidebar";

const ServicesSingleOne = ({ service = {} }) => {
  return (
    <section className="services-single-one clearfix">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <ServicesSingleOneContent service={service} />
          </Col>
          <Col xl={4} lg={5}>
            <ServicesSingleSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSingleOne;
