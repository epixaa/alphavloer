import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeaderTwo from "@/components/Reuseable/PageHeaderTwo";
import ServicesSingleOne from "@/components/Services/ServicesSingleOne";
import SiteFooterTwo from "@/components/SiteFooter/SiteFooterTwo";
import WorkOne from "@/components/Work/WorkOne";
import { servicesSingleOne } from "@/data/services";
import React from "react";

const ServicesSingle2 = () => {
  return (
    <Layout pageTitle="Floor Refinishing">
      <Header className="main-header--one--two" />
      <PageHeaderTwo title="Floor Refinishing" />
      <ServicesSingleOne service={servicesSingleOne} />
      <WorkOne
        showShape={false}
        className="work-one--services work-one--services-two"
      />
      <SiteFooterTwo />
    </Layout>
  );
};

export default ServicesSingle2;
