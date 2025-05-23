import { blogOne } from "@/data/blog";
import { TextSplit, Title } from "@/Reuseable";
import classNames from "@/utils/classNames";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleBlogOne from "./SingleBlogOne";

const { tagline, title, blogs } = blogOne;

const BlogOne = ({ className = "", blogsCount }) => {
  return (
    <section className={classNames("blog-one", className)}>
      <Container>
        <Title tagline={tagline} className="text-center">
          <TextSplit text={title} />
        </Title>
        <Row>
          {blogs.slice(0, blogsCount).map((blog) => (
            <SingleBlogOne blog={blog} key={blog.id} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogOne;
