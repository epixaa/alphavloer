import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServicesTwoTwo from "@/components/Services/ServicesTwoTwo";
import SiteFooterTwo from "@/components/SiteFooter/SiteFooterTwo";
import WorkOne from "@/components/Work/WorkOne";
import React from "react";

const Services2 = () => {
  return (
    <Layout pageTitle="Services Two">
      <Header className="main-header--one--two" />
      <PageHeader title="Services" page="Service" />
      <ServicesTwoTwo />
      <WorkOne
        showShape={false}
        className="work-one--services work-one--services-two"
      />
      <SiteFooterTwo />
    </Layout>
  );
};

export default Services2;
