import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PortfolioSingleOne from "@/components/Portfolio/PortfolioSingleOne";
import PreviousNext from "@/components/PreviousNext/PreviousNext";
import PageHeaderTwo from "@/components/Reuseable/PageHeaderTwo";
import SiteFooterTwo from "@/components/SiteFooter/SiteFooterTwo";
import { pageHeaderThree } from "@/data/header";
import React from "react";

const PortfolioSingle = () => {
  return (
    <Layout pageTitle="Portfolio Single">
      <Header className="main-header--one--two" />
      <PageHeaderTwo
        title="Anchor Wood Floors Installation"
        className="page-header--protfolio-single"
        data={pageHeaderThree}
      />
      <PortfolioSingleOne />
      <PreviousNext />
      <SiteFooterTwo />
    </Layout>
  );
};

export default PortfolioSingle;
