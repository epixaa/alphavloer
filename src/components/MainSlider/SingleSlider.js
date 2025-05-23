import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";
import TextSplit from "../Reuseable/TextSplit";

const SingleSlider = ({ slide = {}, sliderTwo = false }) => {
  const { bg, text, title } = slide;

  return (
    <>
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${
            require(`@/images/backgrounds/${bg}`).default.src
          })`,
        }}
      ></div>
      <Container>
        <Row>
          <Col xl={12}>
            <div
              className={`main-slider-one__inner${
                !sliderTwo ? " text-center" : ""
              }`}
            >
              {sliderTwo && <div className="border-box"></div>}
              <p className="main-slider-one__text">{text}</p>
              <TextSplit
                text={title}
                as="h2"
                className="main-slider-one__title"
              />
              <div className="main-slider-one__btn">
                <Link href="/portfolio" className="thm-btn">
                  {sliderTwo ? "Find Product" : "Our Solution"}
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleSlider;
