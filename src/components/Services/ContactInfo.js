import { TextSplit } from "@/Reuseable";
import React from "react";
import { Image } from "react-bootstrap";

const ContactInfo = ({
  info = {},
  className = "services-single__sidebar-single",
}) => {
  const { phoneIcon, icon, contactTitle, callText, phone, phoneHref } = info;

  return (
    <div className={`${className} fadeInUp animated`}>
      <div className="services-single__sidebar-contact-info text-center">
        <div className="icon-bg">
          <Image src={phoneIcon.src} alt="" />
        </div>
        <div className="icon">
          <span className={icon}></span>
        </div>
        <TextSplit
          text={contactTitle}
          as="h2"
          className="services-single__sidebar-contact-info-title"
        />
        <p className="services-single__sidebar-contact-info-text">{callText}</p>
        <a href={`tel:${phoneHref}`}>{phone}</a>
      </div>
    </div>
  );
};

export default ContactInfo;
