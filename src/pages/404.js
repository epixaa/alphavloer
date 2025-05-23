import ErrorPage from "@/components/ErrorPage/ErrorPage";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import React from "react";

const Error = () => {
  return (
    <Layout pageTitle="Error">
      <Header className="main-header--one--two" />
      <ErrorPage />
      <SiteFooter />
    </Layout>
  );
};

export default Error;
