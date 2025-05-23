import BlogPageSingle from "@/components/Blog/BlogPageSingle";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import { TextSplit } from "@/components/Reuseable";
import PageHeader from "@/components/Reuseable/PageHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import React from "react";

const title = "Expert Advice on Hardwood \n Floors for Homeowners";

const BlogSingle = () => {
  return (
    <Layout pageTitle="Blog Single">
      <Header className="main-header--one--two" />
      <PageHeader title={<TextSplit text={title} />} page="Blog Single" />
      <BlogPageSingle />
      <SiteFooter />
    </Layout>
  );
};

export default BlogSingle;
