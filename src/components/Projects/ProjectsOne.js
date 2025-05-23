import { projectsOne } from "@/data/projects";
import { Link, Title, VisibilityCountUp } from "@/Reuseable";
import classNames from "@/utils/classNames";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleProjectOne from "./SingleProjectOne";

const { tagline, title, count, text, projects } = projectsOne;

const ProjectsOne = ({ showTop = false, className = "", projectsCount }) => {
  return (
    <section className={classNames("projects-one", className)}>
      {showTop && (
        <Container>
          <Row>
            <Col xl={12}>
              <div className="projects-one__top">
                <Title tagline={tagline}>
                  {title}
                  <br />
                  <VisibilityCountUp count={count} />
                  <span className="plus">+</span> {text}
                </Title>
              </div>
            </Col>
          </Row>
        </Container>
      )}

      <div className="auto-container">
        <Row>
          {projects.slice(0, projectsCount).map((project) => (
            <SingleProjectOne project={project} key={project.id} />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default ProjectsOne;
