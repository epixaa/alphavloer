import bg1 from "@/images/backgrounds/page-header-img1.jpg";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "./Link";

const PageHeader = ({ title = "", page = "", bg = bg1 }) => {
  return (
    <section className="page-header">
      <div
        className="page-header__bg"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <Container>
        <Row>
          <Col xl={12}>
            <div className="page-header__wrapper">
              <div className="page-header__content">
                <h2>{title}</h2>
                <div className="page-header__menu">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>{" "}
                    <li>{page || title}</li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PageHeader;
