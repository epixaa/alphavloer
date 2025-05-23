import BestLogistics from "@/components/BestLogistics/BestLogistics";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServicesOne from "@/components/Services/ServicesOne";
import SiteFooterTwo from "@/components/SiteFooter/SiteFooterTwo";
import WorkOne from "@/components/Work/WorkOne";
import React from "react";

const Services = () => {
  return (
    <Layout pageTitle="Services">
      <Header className="main-header--one--two" />
      <PageHeader title="Services" page="Service" />
      <ServicesOne />
      <BestLogistics />
      <WorkOne className="work-one--services" />
      <SiteFooterTwo />
    </Layout>
  );
};

export default Services;
