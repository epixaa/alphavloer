import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeaderTwo from "@/components/Reuseable/PageHeaderTwo";
import ServicesSingleOne from "@/components/Services/ServicesSingleOne";
import SiteFooterTwo from "@/components/SiteFooter/SiteFooterTwo";
import WorkOne from "@/components/Work/WorkOne";
import { servicesSingleOne } from "@/data/services";
import React from "react";

const ServicesSingle1 = () => {
  return (
    <Layout pageTitle="Floor Demolition Installation">
      <Header className="main-header--one--two" />
      <PageHeaderTwo title="Floor Demolition and Installation" />
      <ServicesSingleOne service={servicesSingleOne} />
      <WorkOne
        showShape={false}
        className="work-one--services work-one--services-two"
      />
      <SiteFooterTwo />
    </Layout>
  );
};

export default ServicesSingle1;
