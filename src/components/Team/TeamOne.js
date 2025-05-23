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
        <Row>
          {teams.slice(0, teamsCount).map((team) => (
            <TeamOneSingle team={team} key={team.id} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TeamOne;
