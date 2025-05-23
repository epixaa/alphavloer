import { missionOne } from "@/data/mission";
import classNames from "@/utils/classNames";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const { missions, images } = missionOne;

const MissionOneSingle = ({ mission = {} }) => {
  const { title, text, text2, id } = mission;

  return (
    <div
      className={classNames(
        "mission-one__content-single",
        id !== 1 && "marb-0"
      )}
    >
      <h2>{title}</h2>
      <div className="text1">
        <p>{text}</p>
      </div>
      <div className="text2">
        <p>{text2}</p>
      </div>
    </div>
  );
};

const MissionOne = () => {
  return (
    <section className="mission-one">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="mission-one__content">
              {missions.map((mission) => (
                <MissionOneSingle mission={mission} key={mission.id} />
              ))}
            </div>
          </Col>
          <Col xl={6}>
            <div className="mission-one__img">
              {images.map(({ image, id, className }) => (
                <div className={className} key={id}>
                  <Image src={image.src} alt="" />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MissionOne;
