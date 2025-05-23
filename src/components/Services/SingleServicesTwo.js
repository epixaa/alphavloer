import { Link } from "@/Reuseable";
import React from "react";
import { Image } from "react-bootstrap";

const SingleServicesTwo = ({ service = {} }) => {
  const { icon, image, title, text } = service;

  return (
    <div className="services-two__single animated fadeInUp">
      <div className="services-two__single-img">
        <Image src={require(`@/images/services/${image}`).default.src} alt="" />
        <div className="icon">
          <span className={icon}></span>
        </div>
      </div>
      <div className="services-two__single-content text-center">
        <h2>
          <Link href="/services-single-1">{title}</Link>
        </h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SingleServicesTwo;
