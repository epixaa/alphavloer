import { teamOne } from "@/data/team";
import { Title } from "@/Reuseable";
import classNames from "@/utils/classNames";
import React from "react";
import { Container, Row } from "react-bootstrap";
import TeamOneSingle from "./TeamOneSingle";

const { tagline, title, teams } = teamOne;

const TeamOne = ({ className = "", teamsCount }) => {
  return (
    <section className={classNames("team-one", className)}>
      <Container>
        <Title tagline={tagline} title={title} className="text-center" />
      </Container>
    </section>
  );
};

export default TeamOne;
