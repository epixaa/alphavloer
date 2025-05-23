import { errorPage } from "@/data/error";
import { Link } from "@/Reuseable";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const { bg, title, text } = errorPage;

const ErrorPage = () => {
  return (
    <section className="error-page">
      <div
        className="error-page__bg"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <Container>
        <Row>
          <Col xl={12}>
            <div className="error-page__wrapper text-center">
              <div className="error-page__content">
                <h2>
                  4<span>0</span>4
                </h2>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="error-page__btn">
                  <Link href="/" className="thm-btn">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ErrorPage;
