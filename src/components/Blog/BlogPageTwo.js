import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogPageTwoContent from "./BlogPageTwoContent";
import BlogPageTwoSidebar from "./BlogPageTwoSidebar";

const BlogPageTwo = () => {
  return (
    <section className="blog-page-two">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <BlogPageTwoContent />
          </Col>
          <Col xl={4} lg={5}>
            <BlogPageTwoSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogPageTwo;
