import React from "react";
import { contactOne } from "@/data/contact";
import { TextSplit, Title } from "@/Reuseable";
import classNames from "@/utils/classNames";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useForm, ValidationError } from "@formspree/react";

const { shape, bg, title2, tagline } = contactOne;

const dutchCities = [
  "Amsterdam",
  "Rotterdam",
  "The Hague (Den Haag)",
  "Utrecht",
  "Eindhoven",
  "Tilburg",
  "Groningen",
  "Almere",
  "Breda",
  "Nijmegen",
  "Enschede",
  "Apeldoorn",
  "Haarlem",
  "Arnhem",
  "'s-Hertogenbosch (Den Bosch)",
  "Amersfoort",
  "Maastricht",
  "Leiden",
  "Dordrecht",
  "Zoetermeer",
  "Zwolle",
  "Deventer",
  "Delft",
  "Alkmaar",
  "Heerlen"
];

const ContactOne = ({ className = "" }) => {
  const [state, handleSubmit] = useForm("myzjgkwk");

  return (
    <section className={classNames("contact-one", className)}>
      <div className="shape1">
        <Image src={shape.src} alt="" />
      </div>

      <div
        className="contact-one__img"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>

      <Container>
        <Row>
          <Col xl={6} lg={0}></Col>
          <Col xl={6} lg={12}>
            <div className="contact-one__content">
              <Title tagline={tagline}>
                <TextSplit text={title2} />
              </Title>

              <div className="contact-one__content-comment-form">
                {state.succeeded ? (
                  <p className="success-message">Благодарим! Съобщението е изпратено успешно.</p>
                ) : (
                  <form
                    className="comment-one__form contact-form-validated"
                    onSubmit={handleSubmit}
                  >
                    <Row>
                      <Col xl={6} lg={6} md={6}>
                        <div className="comment-form__input-box">
                          <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            required
                          />
                          <ValidationError prefix="Name" field="name" errors={state.errors} />
                        </div>
                      </Col>

                      <Col xl={6} lg={6} md={6}>
                        <div className="comment-form__input-box">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                          />
                          <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col xl={6} lg={6} md={6}>
                        <div className="comment-form__input-box">
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            required
                          />
                          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                        </div>
                      </Col>

                      <Col xl={6} lg={6} md={6}>
                        <div className="comment-form__input-box">
                          <select name="city" required>
                            <option value="">Select City</option>
                            {dutchCities.map((city) => (
                              <option key={city} value={city}>
                                {city}
                              </option>
                            ))}
                          </select>
                          <ValidationError prefix="City" field="city" errors={state.errors} />
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col xl={12} lg={12}>
                        <div className="comment-form__input-box">
                          <textarea
                            name="message"
                            placeholder="Message Details"
                            required
                          ></textarea>
                          <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </div>

                        <button
                          type="submit"
                          className="thm-btn comment-form__btn"
                          disabled={state.submitting}
                        >
                          Send
                        </button>
                      </Col>
                    </Row>
                  </form>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactOne;
