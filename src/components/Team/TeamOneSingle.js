import { Link } from "@/Reuseable";
import React from "react";
import { Col, Image } from "react-bootstrap";

const TeamOneSingle = ({ team = {} }) => {
  const { image, name, tagline, socials } = team;

  return (
    <Col xl={4} lg={4} className="animated fadeInLeft">
      <div className="team-one__single">
        <div className="team-one__single-img">
          <Image src={require(`@/images/team/${image}`).default.src} alt="" />
          <div className="overlay-icon">
            <ul>
              {socials.map(({ id, icon, href }) => (
                <li key={id}>
                  <a href={href}>
                    <span className={icon}></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="team-one__single-content text-center">
          <h2>
            <Link href="/team">{name}</Link>
          </h2>
          <p>{tagline}</p>
        </div>
      </div>
    </Col>
  );
};

export default TeamOneSingle;
