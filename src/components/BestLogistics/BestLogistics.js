import { bestLogistics } from "@/data/bestLogistics";
import classNames from "@/utils/classNames";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import Title from "../Reuseable/Title";
import VisibilityCountUp from "../Reuseable/VisibilityCountUp";

const { text, title, shape, counters, bottomText, overlayContent, images } =
  bestLogistics;

const BestLogistics = ({ className = "" }) => {
  return (
    <section className={classNames("best-logistics-one", className)}>
      <div className="shape2 animated zoominout">
        <Image src={shape.src} alt="" />
      </div>
      <Container>
        <Row>
          <Col xl={6}>
            <div className="best-logistics-one__content">
              <Title text={text}>
                <TextSplit text={title} />
              </Title>
              <ul className="best-logistics-one__content-counter">
                {counters.map(({ id, title, text, count, isK }) => (
                  <li key={id} className="animated fadeInUp">
                    <div className={isK ? "inner" : ""}>
                      <h2>
                        <span className="odometer">
                          <VisibilityCountUp count={count} />
                        </span>
                        {isK && <span className="k">k</span>}
                        <span
                          className={`fa fa-plus plus-icon${
                            !isK ? " pd-l" : ""
                          }`}
                        ></span>
                      </h2>
                      <h3 className="best-logistics-one__content-counter-title">
                        {title}
                      </h3>
                      <p className="best-logistics-one__content-counter-text">
                        {text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="best-logistics-one__content-bottom">
                <div className="best-logistics-one__content-bottom-text">
                  <p>{bottomText}</p>
                </div>

                <div className="best-logistics-one__content-bottom-btn">
                  <a href="#" className="thm-btn">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="best-logistics-one__img">
              {images.map(({ id, image, className }) => (
                <div key={id} className={className}>
                  <Image src={image.src} alt="" />
                </div>
              ))}
              <div className="overlay-content">
                <h2>{overlayContent}</h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BestLogistics;
