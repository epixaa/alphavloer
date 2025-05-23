import handleSubmit from "@/utils/handleSubmit";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const AddCommentBox = ({ arrowIcon, commentTitle, commentText }) => {
  const onSubmit = (data) => console.log(data);

  return (
    <div className="add-comment-box">
      <div className="title">
        <h2>{commentTitle}</h2>
        <p>{commentText}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} id="add-comment-form">
        <Row>
          <Col md={12}>
            <Row>
              <Col md={6}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  required
                />
              </Col>
              <Col md={6}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email*"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <textarea
                  name="message"
                  placeholder="Your Comment"
                  required
                ></textarea>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="create-acc">
              <div className="checkbox">
                <label htmlFor="create-acc">
                  <input
                    id="create-acc"
                    type="checkbox"
                    name="ship-same-address"
                  />
                  <span>
                    Save my name, email, and website in this browser for the
                  </span>
                </label>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <button type="submit" className="thm-btn blog-page-single__btn">
              send message <Image src={arrowIcon.src} alt="" />
            </button>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default AddCommentBox;
