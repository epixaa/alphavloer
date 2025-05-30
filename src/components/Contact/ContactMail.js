import React from 'react';
import { TextSplit, Title } from "@/Reuseable";
import { useForm, ValidationError } from '@formspree/react';
import { Col, Container, Image, Row } from "react-bootstrap";

function ContactForm() {
  const [state, handleSubmit] = useForm("myzjgkwk");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <section className={classNames("contact-one", className)}>
      <div className="shape1">
        <Image src={shape.src} alt="" />
      </div>
      <div
        className="contact-one__img"
        style={{ backgroundImage: `url(${bg.src})` }}
      >

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
    <form onSubmit={handleSubmit} className="comment-one__form contact-form-validated">
        <Col xl={6} lg={6} md={6}>
        <div className="comment-form__input-box">
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>
      </Col>
      <Col xl={12} lg={12}>
       <div className="comment-form__input-box">
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>
      </Col>
      <button type="submit" disabled={state.submitting} className="thm-btn comment-form__btn">
        Submit
      </button>
    </form>
    </div>
    </div>
    </Col>
    </Row>
    </Container>
    </section>
  );
}

function App() {
  return (
    <ContactForm />
  );
}


export default App;