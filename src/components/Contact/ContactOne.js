import { contactOne } from "@/data/contact";
import { TextSplit, Title } from "@/Reuseable";
import classNames from "@/utils/classNames";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const { shape, bg, count, title, tagline, title2 } = contactOne;

const ContactOne = ({ className = "" }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className={classNames("contact-one", className)}>
      <div className="shape1">
        <Image src={shape.src} alt="" />
      </div>
      <div
        className="contact-one__img"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="overlay-content text-center">
          <h2>{count}</h2>
          <TextSplit text={title} as="h3" />
        </div>
      </div>
      <Container>
        <Row>
          <Col xl={6} lg={0}></Col>
          <Col xl={6} lg={12}>
            <div className="contact-one__content">
              <Title tagline={tagline}>
                <TextSplit text={title2} />
              </Title>
              <div className="contact-one__content-comment-form">
                <form
                  className="comment-one__form contact-form-validated"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Row>
                    <Col xl={6} lg={6} md={6}>
                      <div className="comment-form__input-box">
                        <input
                          type="text"
                          placeholder="Full Name"
                          name="name"
                          {...register("name", { required: true })}
                        />
                        {errors.name && (
                          <span className="error">This field is required.</span>
                        )}
                      </div>
                    </Col>
                    <Col xl={6} lg={6} md={6}>
                      <div className="comment-form__input-box">
                        <input
                          type="email"
                          placeholder="Email Address"
                          name="email"
                          {...register("email", { required: true })}
                        />
                        {errors.email && (
                          <span className="error">This field is required.</span>
                        )}
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col xl={12} lg={12}>
                      <div className="comment-form__input-box">
                        <textarea
                          name="message"
                          placeholder="Message Details"
                          {...register("message", { required: true })}
                        ></textarea>
                        {errors.message && (
                          <span className="error">This field is required.</span>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="thm-btn comment-form__btn"
                      >
                        Send
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactOne;
