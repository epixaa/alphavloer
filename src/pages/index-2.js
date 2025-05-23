import AboutOne from "@/components/About/AboutOne";
import BestLogistics from "@/components/BestLogistics/BestLogistics";
import ContactOne from "@/components/Contact/ContactOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import MainSliderTwo from "@/components/MainSlider/MainSliderTwo";
import OurMaterialTwo from "@/components/OurMaterial/OurMaterialTwo";
import ProjectsTwo from "@/components/Projects/ProjectsTwo";
import ServicesTwo from "@/components/Services/ServicesTwo";
import SiteFooterTwo from "@/components/SiteFooter/SiteFooterTwo";
import TeamOne from "@/components/Team/TeamOne";
import TestimonialsTwo from "@/components/Testimonial/TestimonialsTwo";
import VideoOne from "@/components/VideoSection/VideoOne";
import { aboutTwo } from "@/data/about";
import React from "react";

const Home2 = () => {
  return (
    <Layout pageTitle="Home Two">
      <Header className="main-header--one--two" />
      <MainSliderTwo />
      <ServicesTwo />
      <AboutOne
        listCount={2}
        className="about-one--two"
        aboutData={aboutTwo}
        aboutTwo
      />
      <BestLogistics />
      <OurMaterialTwo />
      <ProjectsTwo />
      <VideoOne className="video-one--two animated slideInUp" />
      <TestimonialsTwo />
      <TeamOne teamsCount={3} />
      <ContactOne className="contact-one--two" />
      <SiteFooterTwo />
    </Layout>
  );
};

export default Home2;
