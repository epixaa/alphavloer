import useToggle from "@/hooks/useToggle";
import { TextSplit, Title, VideoModal } from "@/Reuseable";
import classNames from "@/utils/classNames";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const AboutOne = ({
  className = "",
  aboutTwo = false,
  aboutData = {},
  listCount,
}) => {
  const [isOpen, toggleOpen] = useToggle(false);

  const {
    shape1,
    image1,
    tagline,
    title,
    text,
    lists,
    text2,
  } = aboutData;

  return (
    <>
      <section className={classNames("about-one", className)}>
        <Container>
          <Row>
            <Col xl={6}>
              <div className="about-one__img">
                <div className="shape1 animated zoom-fade">
                  <Image src={shape1.src} alt="" />
                </div>
                <div className="about-one__img1">
                  <Image src={image1.src} alt="" />
                </div>
              </div>
            </Col>
            <Col xl={6}>
              <div className="about-one__content">
                <Title tagline={tagline}>
                  <TextSplit text={title} />
                </Title>
                {!aboutTwo ? (
                  <div className="about-one__content-text">
                    <TextSplit text={text} as="p" />
                  </div>
                ) : (
                  <>
                    <div className="about-two__content-text1">
                      <p>{text}</p>
                    </div>
                    <div className="about-two__content-text2">
                      <p>{text2}</p>
                    </div>
                  </>
                )}
                <ul className="about-one__content-list">
                  {lists.slice(0, listCount).map(({ id, icon, title }) => (
                    <li key={id}>
                      <div className="icon">
                        <span className={icon}></span>
                      </div>
                      <div className="title">
                        <h3>{title}</h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        
      </section>
    </>
  );
};

export default AboutOne;
