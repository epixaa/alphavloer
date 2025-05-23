import ContactPage from "@/components/Contact/ContactPage";
import GoogleMap from "@/components/GoogleMap/GoogleMap";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import bg from "@/images/backgrounds/page-header-img2.jpg";
import React from "react";

const Contact = () => {
  return (
    <Layout pageTitle="Contact">
      <Header className="main-header--one--two" />
      <PageHeader title="Contact us" page="Contact" bg={bg} />
      <GoogleMap />
      <ContactPage />
      <SiteFooter />
    </Layout>
  );
};

export default Contact;
