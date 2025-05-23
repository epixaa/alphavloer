import AboutOne from "@/components/About/AboutOne";
import BestLogistics from "@/components/BestLogistics/BestLogistics";
import ContactOne from "@/components/Contact/ContactOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import MissionOne from "@/components/Mission/MissionOne";
import PageHeader from "@/components/Reuseable/PageHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import TeamOne from "@/components/Team/TeamOne";
import VideoOne from "@/components/VideoSection/VideoOne";
import { aboutTwo } from "@/data/about";
import React from "react";

const About = () => {
  return (
    <Layout pageTitle="About">
      <Header className="main-header--one--two" />
      <PageHeader title="About Company" page="About us" />
      <AboutOne
        className="about-one--two about-one--two--about"
        aboutTwo
        aboutData={aboutTwo}
      />
      <MissionOne />
      <BestLogistics />
      <VideoOne className="video-one--two video-one--two--about animated slideInUp" />
      <TeamOne teamsCount={3} />
      <ContactOne className="contact-one--two" />
      <SiteFooter />
    </Layout>
  );
};

export default About;
