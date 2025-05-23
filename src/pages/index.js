import AboutOne from "@/components/About/AboutOne";
import BestLogistics from "@/components/BestLogistics/BestLogistics";
import BlogOne from "@/components/Blog/BlogOne";
import ContactOne from "@/components/Contact/ContactOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSlider/MainSlider";
import OurMaterial from "@/components/OurMaterial/OurMaterial";
import ProjectsOne from "@/components/Projects/ProjectsOne";
import YourProject from "@/components/ProjectSection/YourProject";
import ServicesOne from "@/components/Services/ServicesOne";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import TestimonialOne from "@/components/Testimonial/TestimonialOne";
import VideoOne from "@/components/VideoSection/VideoOne";
import WorkOne from "@/components/Work/WorkOne";
import { aboutOne } from "@/data/about";
import React from "react";

const Home = () => {
  return (
    <Layout>
      <Header />
      <MainSlider />
      <YourProject />
      <AboutOne aboutData={aboutOne} />
      <BestLogistics />
      <ServicesOne itemsCount={3} />
      <OurMaterial />
      <WorkOne />
      <ProjectsOne showTop projectsCount={4} />
      <VideoOne />
      <ContactOne />
      <TestimonialOne />
      <BlogOne blogsCount={3} />
      <SiteFooter />
    </Layout>
  );
};

export default Home;
