import { contactPage } from "@/data/contact";
import { TextSplit } from "@/Reuseable";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const { title, text, phone, phoneHref, mobile, address, formTitle, formText } =
  contactPage;

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="contact-page">
      <Container>
        <Row>
          <Col xl={5} lg={5}>
            <div className="contact-page__get-in-touch">
              <div className="title">
                <h2>{title}</h2>
                <TextSplit text={text} as="p" />
              </div>
              <ul>
                <li>
                  <div className="icon rotate">
                    <span className="fa fa-phone"></span>
                  </div>
                  <div className="text">
                    <span>Phone</span>
                    <p className="telephone">
                      Call : <a href={`tel:${phoneHref}`}>{phone}</a>
                    </p>
                    <p className="mobile">
                      Fax : <a href={`tel:${phoneHref}`}>{mobile}</a>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon bg2">
                    <span className="fa fa-map-marker"></span>
                  </div>
                  <div className="text">
                    <span>Address</span>
                    <TextSplit as="p" text={address} />
                  </div>
                </li>
              </ul>
            </div>
          </Col>
          <Col xl={7} lg={7}>
            <div className="contact-page__comment-form">
              <div className="title">
                <h2>{formTitle}</h2>
                <TextSplit text={formText} as="p" />
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="comment-one__form contact-form-validated"
              >
                <Row>
                  <Col xl={6} lg={6} md={6}>
                    <div className="comment-form__input-box">
                      <input
                        type="text"
                        placeholder="User Name"
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
                        placeholder="Email"
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
                      <input
                        type="text"
                        placeholder="Phone"
                        name="phone"
                        {...register("phone", { required: true })}
                      />
                      {errors.phone && (
                        <span className="error">This field is required.</span>
                      )}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xl={12}>
                    <div className="comment-form__input-box">
                      <textarea
                        name="message"
                        placeholder="Your Message here"
                        {...register("message", { required: true })}
                      ></textarea>
                      {errors.message && (
                        <span className="error">This field is required.</span>
                      )}
                    </div>
                    <button type="submit" className="thm-btn comment-form__btn">
                      Send Message
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactPage;
