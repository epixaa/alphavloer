import { projectsTwo } from "@/data/projects";
import { Link, VisibilityCountUp } from "@/Reuseable";
import dynamic from "next/dynamic";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TnsControls from "../TinySlider/TnsControls";
import SingleProjectTwo from "./SingleProjectTwo";

const TinySlider = dynamic(() => import("../TinySlider/TinySlider"), {
  ssr: false,
});

const options = {
  loop: true,
  lazyload: true,
  nav: false,
  speed: 500,
  mouseDrag: true,
  items: 1,
  gutter: 0,
  autoplay: true,
  autoHeight: true,
  controls: true,
  controlsContainer: ".tns-controls",
  autoplayButton: false,
  autoplayButtonOutput: false,
  responsive: {
    580: {
      items: 2,
      gutter: 30,
    },
    1000: {
      items: 3,
      gutter: 30,
    },
  },
};

const { tagline, title, count, text, projects } = projectsTwo;

const ProjectsTwo = () => {
  return (
    <section className="projects-two">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="projects-two__top">
              <div className="sec-title">
                <span className="sec-title__tagline">{tagline}</span>
                <h2 className="sec-title__title">
                  {title} <br /> <VisibilityCountUp count={count} />
                  <span className="plus">+</span> {text}
                </h2>
              </div>
              <div className="projects-two__top-btn">
                <Link href="/portfolio" className="thm-btn">
                  More Project
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <div className="projects-two__carousel">
              <TinySlider options={options}>
                {projects.map((project) => (
                  <SingleProjectTwo key={project.id} project={project} />
                ))}
              </TinySlider>
              <TnsControls />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectsTwo;
