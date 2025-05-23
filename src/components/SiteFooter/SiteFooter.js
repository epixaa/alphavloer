import footerData from "@/data/siteFooter";
import { Link, TextSplit } from "@/Reuseable";
import handleSubmit from "@/utils/handleSubmit";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const {
  bg,
  title,
  arrow,
  checkText,
  logo,
  address,
  email,
  year,
  links,
  socials,
  bottomList,
} = footerData;

const SiteFooter = () => {
  const onSubmit = (data) => console.log(data);

  return (
    <footer className="footer-one">
      <div
        className="footer-one__bg"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <div className="footer-one__top">
        <Container>
          <div className="footer-one__subscribe-box">
            <Row>
              <Col xl={6} lg={6}>
                <div className="footer-one__subscribe-box-text">
                  <TextSplit text={title} as="h2" />
                </div>
              </Col>
              <Col xl={6} lg={6}>
                <div className="footer-one__subscribe-box-right">
                  <form
                    className="subscribe-form"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="input-box">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                      />
                    </div>
                    <button type="submit">
                      <Image src={arrow.src} alt="" />
                    </button>
                  </form>

                  <div className="checked-box">
                    <input
                      type="checkbox"
                      name="skipper1"
                      id="skipper"
                      defaultChecked
                    />
                    <label htmlFor="skipper">
                      <span></span>
                      {checkText}
                    </label>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <Row>
            <Col xl={12}>
              <div className="footer-one__top-wrapper">
                <Row>
                  <Col xl={4} lg={4} md={6} className="animated fadeInUp">
                    <div className="footer-widget__column footer-widget__about">
                      <div className="footer-widget__about-logo">
                        <Link href="/">
                          <Image src={logo.src} alt="" />
                        </Link>
                      </div>
                      <TextSplit
                        text={address}
                        as="p"
                        className="footer-widget__about-text"
                      />
                      <p className="footer-widget__about-email">
                        <a href={`mailto:${email}`}>{email}</a>
                      </p>
                    </div>
                  </Col>
                  <Col xl={3} lg={3} md={6} className="animated fadeInUp">
                    <div className="footer-widget__column footer-widget__services">
                      <h2 className="footer-widget__title">Services</h2>
                      <ul className="footer-widget__services-list">
                        {links.slice(0, 5).map(({ id, text, href }) => (
                          <li
                            key={id}
                            className="footer-widget__services-list-item"
                          >
                            <a href={href}>{text}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                  <Col xl={2} lg={2} md={6} className="animated fadeInUp">
                    <div className="footer-widget__column footer-widget__quick-links">
                      <h2 className="footer-widget__title">Quick Links</h2>
                      <ul className="footer-widget__quick-links-list">
                        {links.slice(5).map(({ id, text, href }) => (
                          <li
                            key={id}
                            className="footer-widget__quick-links-list-item"
                          >
                            <Link href={href}>{text}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                  <Col xl={3} lg={3} md={6} className="animated fadeInUp">
                    <div className="footer-widget__column footer-widget__contact-info">
                      <h2 className="footer-widget__title">Get In Touch</h2>

                      <div className="footer-widget__contact-info-social-links">
                        <ul>
                          {socials.map(({ id, icon, href }) => (
                            <li key={id}>
                              <a className="me-1" href={href}>
                                <i className={icon}></i>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-one__bottom clearfix">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="footer-one__bottom-inner">
                <div className="footer-one__bottom-text">
                  <p>Copyright &copy; {year} All Rights Reserved by</p>
                </div>

                <div className="footer-one__bottom-list">
                  <ul>
                    {bottomList.map(({ id, text, href }) => (
                      <li
                        className={bottomList.length !== id ? "me-1" : ""}
                        key={id}
                      >
                        <Link href={href}>{text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default SiteFooter;
