import AboutOne from "@/components/About/AboutOne";
import BestLogistics from "@/components/BestLogistics/BestLogistics";
import ContactOne from "@/components/Contact/ContactOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSlider/MainSlider";
import ProjectsOne from "@/components/Projects/ProjectsOne";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import TestimonialOne from "@/components/Testimonial/TestimonialOne";
import WorkOne from "@/components/Work/WorkOne";
import ContactMail from "@/components/Contact/ContactMail"
import { aboutOne } from "@/data/about";
import React from "react";

const Home = () => {
  return (
    <Layout>
      <Header />
      <MainSlider />
      <AboutOne aboutData={aboutOne} />
      <BestLogistics />
      <WorkOne />
      <ProjectsOne showTop projectsCount={4} />
      <ContactOne />
      <ContactMail />
      <TestimonialOne />
      <SiteFooter />
    </Layout>
  );
};

export default Home;
