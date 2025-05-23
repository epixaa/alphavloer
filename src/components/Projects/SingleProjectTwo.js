import React from "react";
import { Link, TextSplit } from "../Reuseable";

const SingleProjectTwo = ({ project = {} }) => {
  const { bg, tagline, title } = project;

  return (
    <div className="projects-two__single">
      <div
        className="projects-two__single-img"
        style={{
          backgroundImage: `url(${
            require(`@/images/resources/${bg}`).default.src
          })`,
        }}
      >
        <div className="overlay-content">
          <div className="overlay-content-inner">
            <div className="text">
              <span>{tagline}</span>
              <h2>
                <TextSplit text={title} as={Link} href="/portfolio-single" />
              </h2>
            </div>
            <div className="button">
              <Link href="/portfolio-single">
                <span className="icon-next"></span>
              </Link>
            </div>
          </div>
        </div>
        <div className="projects-two__single__btn">
          <Link href="/portfolio-single">View More</Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectTwo;
