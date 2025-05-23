import { Link } from "@/Reuseable";
import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleProjectOne = ({ project = {} }) => {
  const { image, tagline, title, text } = project;

  return (
    <Col xl={3} lg={6} className="animated fadeInLeft">
      <div className="projects-one__single">
        <div className="projects-one__single-img">
          <Image
            src={require(`@/images/resources/${image}`).default.src}
            alt=""
          />
        </div>
        <div className="projects-one__single-content">
          <span>{tagline}</span>
          <h2>
            {title}
          </h2>
          <p>{text}</p>
        </div>
      </div>
    </Col>
  );
};

export default SingleProjectOne;
