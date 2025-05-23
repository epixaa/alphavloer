import { useRootContext } from "@/context/context";
import { hiddenBar } from "@/data/header";
import handleSubmit from "@/utils/handleSubmit";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";
import TextSplit from "../Reuseable/TextSplit";

const { logo, aboutText, address, phone, phoneHref, email, year, author } =
  hiddenBar;

const HiddenBar = () => {
  const { sideNav, setSideNav } = useRootContext();
  const onSubmit = (data) => console.log(data);

  return (
    <section
      className={`hidden-bar right-align${sideNav ? " visible-sidebar" : ""}`}
    >
      <div className="hidden-bar-closer">
        <button onClick={setSideNav}>
          <span className="fa fa-times"></span>
        </button>
      </div>
      <div className="hidden-bar-wrapper">
        <div className="logo">
          <Link href="/">
            <Image src={logo.src} alt="Logo" />
          </Link>
        </div>
        <div className="hiddenbar-about-us">
          <h3>About Us</h3>
          <div className="text">
            <p>{aboutText}</p>
          </div>
        </div>
        <div className="contact-info-box">
          <h3>Contact Info</h3>
          <ul>
            <li>
              <h5>Address</h5>
              <TextSplit text={address} as="p" />
            </li>
            <li>
              <h5>Phone</h5>
              <p>
                <a href={`tel:${phoneHref}`}>{phone}</a>
              </p>
            </li>
            <li>
              <h5>Email</h5>
              <p>
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            </li>
          </ul>
        </div>
        <div className="copy-right-text">
          <p>
            © alphavloer {year}, All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HiddenBar;
