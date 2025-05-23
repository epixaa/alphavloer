import { ourMaterial } from "@/data/ourMaterial";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import Title from "../Reuseable/Title";

const { title, text, image, image2 } = ourMaterial;

const OurMaterial = () => {
  return (
    <section className="our-material-one">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="our-material-one__content">
              <Title text={text}>
                <TextSplit text={title} />
              </Title>
              <div className="our-material-one__content-btn">
                <a href="#" className="thm-btn">
                  Our Product
                </a>
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="our-material-one__img">
              <div className="our-material-one__img1">
                <Image src={image.src} alt="" />
              </div>
              <div className="our-material-one__img2 animated zoomIn">
                <Image src={image2.src} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurMaterial;
