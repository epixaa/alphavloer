import { portfolioTwo } from "@/data/portfolio";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SinglePortfolioTwo from "./SinglePortfolioTwo";

const PortfolioTwo = () => {
  return (
    <section className="protfolio-two">
      <Container>
        <Row>
          {portfolioTwo.map((portfolio) => (
            <SinglePortfolioTwo key={portfolio.id} portfolio={portfolio} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioTwo;
