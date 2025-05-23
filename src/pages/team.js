import BestLogistics from "@/components/BestLogistics/BestLogistics";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import SiteFooterTwo from "@/components/SiteFooter/SiteFooterTwo";
import TeamOne from "@/components/Team/TeamOne";
import VideoOne from "@/components/VideoSection/VideoOne";
import React from "react";

const Team = () => {
  return (
    <Layout pageTitle="Team">
      <Header className="main-header--one--two" />
      <PageHeader title="Our Team" page="Team" />
      <TeamOne className="team-one--team" />
      <BestLogistics />
      <VideoOne className="video-one--two video-one--two--about video-one--two--about--team" />
      <SiteFooterTwo />
    </Layout>
  );
};

export default Team;
