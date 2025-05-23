import { pageHeaderTwo } from "@/data/header";
import classNames from "@/utils/classNames";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const PageHeaderTwo = ({
  title = "",
  className = "",
  data = pageHeaderTwo,
}) => {
  const { bg, text, phone, phoneHref } = data;

  return (
    <section
      className={classNames(
        "page-header page-header--services-single-one",
        className
      )}
    >
      <div
        className="page-header__bg"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <Container>
        <Row>
          <Col xl={12}>
            <div className="page-header__wrapper text-center">
              <div className="page-header__content">
                <h2>{title}</h2>
                {text && <p>{text}</p>}
                <div className="number">
                  <a href={`tel:${phoneHref}`}>{phone}</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PageHeaderTwo;
