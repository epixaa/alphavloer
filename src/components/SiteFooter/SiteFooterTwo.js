import footerData from "@/data/siteFooter";
import { Link, TextSplit } from "@/Reuseable";
import handleSubmit from "@/utils/handleSubmit";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const {
  bg2,
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
  callText,
  phone,
  phoneHref,
} = footerData;

const SiteFooterTwo = () => {
  const onSubmit = (data) => console.log(data);

  return (
    <footer className="footer-one footer-one--two">
      <div
        className="footer-one__bg"
        style={{ backgroundImage: `url(${bg2.src})` }}
      ></div>
      <div className="footer-one__top">
        <Container>
          <div className="footer-one--two__contact-box">
            <Row>
              <Col xl={12}>
                <div className="footer-one--two__contact-box-inner text-center">
                  <h2>
                    <TextSplit text={callText} />
                    <a href={`tel:${phoneHref}`}>{phone}</a>
                  </h2>
                  <div className="footer-one--two__contact-box-btn">
                    <Link href="/contact" className="thm-btn">
                      Contact Us
                    </Link>
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
                        key={id}
                        className={bottomList.length !== id ? "me-1" : ""}
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

export default SiteFooterTwo;
