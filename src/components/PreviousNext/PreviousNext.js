import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const PreviousNext = () => {
  return (
    <section className="previous-next-one">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="previous-next-one__inner">
              <div className="previous-box">
                <p>
                  <a href="#">Previous</a>
                </p>
                <h2>
                  <a href="#">Luxury Vinyl Tile</a>
                </h2>
              </div>

              <div className="next-box">
                <p>
                  <a href="#">Next </a>
                </p>
                <h2>
                  <a href="#">Commercial Sheet</a>
                </h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PreviousNext;
