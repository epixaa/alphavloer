import { workOne } from "@/data/work";
import classNames from "@/utils/classNames";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";

const { shape, title, tagline, works } = workOne;

const WorkSingle = ({ work = {} }) => {
  const { id, icon, title } = work;

  return (
    <Col xl={3} lg={3} className="animated fadeInUp">
      <div className="work-one__single text-center">
        <div className={`work-one__single-icon bg${id}`}>
          <span className={icon}></span>
          <div className="count-box"></div>
        </div>
        <h2>
          <a href="#">{title}</a>
        </h2>
      </div>
    </Col>
  );
};

const WorkOne = ({ className = "", showShape = true }) => {
  return (
    <section className={classNames("work-one", className)}>
      {showShape && (
        <div className="shape1">
          <Image src={shape.src} alt="" />
        </div>
      )}
      <Container>
        <Title tagline={tagline} title={title} className="text-center" />
        <Row>
          {works.map((work) => (
            <WorkSingle work={work} key={work.id} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WorkOne;
