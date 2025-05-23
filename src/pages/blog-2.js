import BlogPageTwo from "@/components/Blog/BlogPageTwo";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import React from "react";

const Blog2 = () => {
  return (
    <Layout pageTitle="Blog Post">
      <Header className="main-header--one--two" />
      <PageHeader title="Blog Post" page="Blog" />
      <BlogPageTwo />
      <SiteFooter />
    </Layout>
  );
};

export default Blog2;
