import { portfolioSingleContent } from "@/data/portfolio";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { image, image2, image3, title, text, text2, lists } =
  portfolioSingleContent;

const PortfolioSingleContent = () => {
  return (
    <div className="protfolio-single__content">
      <div className="protfolio-single__img1">
        <Image src={image.src} alt="" />
      </div>
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="text1">
        <p>{text}</p>
      </div>
      <div className="protfolio-single__content-list">
        <ul>
          {lists.map((text, i) => (
            <li key={i}>
              <div className="icon">
                <span className="fa fa-check"></span>
              </div>
              <div className="text">
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="protfolio-single__bottom-img">
        <Row>
          <Col xl={6} lg={6} md={6}>
            <div className="protfolio-single__bottom-img-single">
              <Image src={image2.src} alt="" />
            </div>
          </Col>
          <Col xl={6} lg={6} md={6}>
            <div className="protfolio-single__bottom-img-single">
              <Image src={image3.src} alt="" />
            </div>
          </Col>
        </Row>
      </div>
      <div className="text2">
        <p>{text2}</p>
      </div>
    </div>
  );
};

export default PortfolioSingleContent;
