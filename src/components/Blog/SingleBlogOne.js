import { Link, TextSplit } from "@/Reuseable";
import React from "react";
import { Col, Image } from "react-bootstrap";

const Info = ({ icon, text }) => {
  return (
    <li>
      <div className="icon">
        <i className={icon} aria-hidden="true"></i>
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
    </li>
  );
};

const SingleBlogOne = ({ blog = {} }) => {
  const { image, tagline, date, title, text } = blog;

  return (
    <Col xl={4} lg={4} className="animated fadeInUp">
      <div className="blog-one__single">
        <div className="blog-one__single-img">
          <Image src={require(`@/images/blog/${image}`).default.src} alt="" />
          <div className="overlay-icon">
            <Link href="/blog-single">
              <span className="fa fa-plus"></span>
            </Link>
          </div>
          <div className="overlay-text">
            <span>{tagline}</span>
          </div>
        </div>
        <div className="blog-one__single-content">
          <ul className="meta-info">
            <Info icon="icon-clock-3" text={date} />
            <Info icon="icon-user-3" text={date} />
          </ul>
          <h2>
            <TextSplit text={title} as={Link} href="/blog-single" />
          </h2>
          <p>{text}</p>
        </div>
      </div>
    </Col>
  );
};

export default SingleBlogOne;
