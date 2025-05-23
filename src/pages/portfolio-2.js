import BestLogistics from "@/components/BestLogistics/BestLogistics";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PortfolioTwo from "@/components/Portfolio/PortfolioTwo";
import PageHeader from "@/components/Reuseable/PageHeader";
import SiteFooterTwo from "@/components/SiteFooter/SiteFooterTwo";
import React from "react";

const Portfolio2 = () => {
  return (
    <Layout pageTitle="Portfolio Two">
      <Header className="main-header--one--two" />
      <PageHeader title="Portfolio v2" page="Portfolio" />
      <PortfolioTwo />
      <BestLogistics className="best-logistics-one--protfolio-two" />
      <SiteFooterTwo />
    </Layout>
  );
};

export default Portfolio2;
