import { ourMaterialTwo } from "@/data/ourMaterial";
import { TextSplit } from "@/Reuseable";
import classNames from "@/utils/classNames";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const { title, text, shape, image, image2, image3 } = ourMaterialTwo;

const ImageContainer = ({ image, className = "our-material-two__img2" }) => {
  return (
    <div className={classNames(className, "animated slideInLeft")}>
      <Image src={image.src} alt="" />
    </div>
  );
};

const OurMaterialTwo = () => {
  return (
    <section className="our-material-two">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="our-material-two__inner">
              <div className="shape1">
                <Image src={shape.src} alt="" />
              </div>

              <div className="our-material-two__img1 clearfix">
                <Image src={image.src} alt="" />
                <ImageContainer image={image2} />
                <ImageContainer
                  image={image3}
                  className="our-material-two__img3"
                />
              </div>
              <div className="our-material-two__bottom text-center">
                <TextSplit text={title} as="h2" />
                <p>{text}</p>
                <div className="our-material-two__bottom-btn">
                  <a href="#" className="thm-btn">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurMaterialTwo;
