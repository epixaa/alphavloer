import BlogOne from "@/components/Blog/BlogOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import React from "react";

const Blog = () => {
  return (
    <Layout pageTitle="Blog">
      <Header className="main-header--one--two" />
      <PageHeader title="Blog Post" page="Blog" />
      <BlogOne className="blog-one--blog" />
      <SiteFooter />
    </Layout>
  );
};

export default Blog;
