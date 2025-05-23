import React from "react";
import { Image } from "react-bootstrap";

const SingleTestimonialOne = ({ testimonial = {} }) => {
  const { icon, text, image, name, tagline } = testimonial;

  return (
    <div>
      <div className="testimonial-one__single">
        <div className="icon">
          <span className={icon}></span>
        </div>
        <div className="text">
          <p>{text}</p>
        </div>
        <div className="client-info">
          <div className="img">
            <Image src={image.src} alt="" />
          </div>
          <div className="title">
            <h3>{name}</h3>
            <p>{tagline}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonialOne;
