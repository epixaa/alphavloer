import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PortfolioSingleContent from "./PortfolioSingleContent";
import PortfolioSingleSidebar from "./PortfolioSingleSidebar";

const PortfolioSingleOne = () => {
  return (
    <section className="protfolio-single clearfix">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <PortfolioSingleContent />
          </Col>
          <Col xl={4} lg={5}>
            <PortfolioSingleSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioSingleOne;
