import { videoOne } from "@/data/videoSection";
import useToggle from "@/hooks/useToggle";
import { Link, TextSplit, VideoModal } from "@/Reuseable";
import classNames from "@/utils/classNames";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const { bg, title, text, videoId } = videoOne;

const VideoOne = ({ className = "" }) => {
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <>
      <section className={classNames("video-one", className)}>
        <Container>
          <Row>
            <Col xl={12}>
              <div
                className="video-one__inner text-center"
                style={{ backgroundImage: `url(${bg.src})` }}
              >
                <TextSplit text={title} as="h2" />
                <p>{text}</p>
                <div className="video-one__bottom">
                  <div className="text">
                    <Link href="/portfolio">View all Project</Link>
                  </div>
                  <div className="icon">
                    <a
                      onClick={toggleOpen}
                      className="video-one__btn video-popup"
                    >
                      <span className="icon-play-2"></span>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <VideoModal isOpen={isOpen} setOpen={toggleOpen} videoId={videoId} />
    </>
  );
};

export default VideoOne;
