import { yourProject } from "@/data/projectSection";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";
import TextSplit from "../Reuseable/TextSplit";

const YourProject = () => {
  return (
    <section className="your-project-one">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="your-project-one__wrapper">
              <ul>
                {yourProject.map(({ id, contact, title, text, btnText }) => (
                  <li key={id} className="your-project-one__single">
                    {contact && (
                      <div className="your-project-one__single-content-box text-center">
                        <h4>
                          <TextSplit text={contact} as={Link} href="/contact" />
                        </h4>
                      </div>
                    )}

                    <div
                      className={`your-project-one__single-text-box${
                        btnText ? " mar-t0" : ""
                      }`}
                    >
                      <TextSplit text={title} as="h2" />
                      <TextSplit text={text} as="p" />
                    </div>

                    {btnText && (
                      <div className="your-project-one__single-btn">
                        <a href="#" className="thm-btn">
                          {btnText}
                        </a>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default YourProject;
