import { Link, TextSplit } from "@/Reuseable";
import React from "react";
import { Col, Image } from "react-bootstrap";

const SinglePortfolioTwo = ({ portfolio = {} }) => {
  const { image, tagline, title } = portfolio;

  return (
    <Col xl={4} lg={6} md={6}>
      <div className="protfolio-two__single">
        <div className="protfolio-two__single-img">
          <Image
            src={require(`@/images/resources/${image}`).default.src}
            alt=""
          />
          <div className="overlay-content">
            <div className="overlay-content-inner">
              <div className="text">
                <span>{tagline}</span>
                <h2>
                  <TextSplit text={title} as={Link} href="/portfolio-single" />
                </h2>
              </div>
              <div className="button">
                <Link href="/portfolio-single">
                  <span className="icon-next"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SinglePortfolioTwo;
