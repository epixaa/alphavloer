import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogPageSingleContent from "./BlogPageSingleContent";
import BlogPageTwoSidebar from "./BlogPageTwoSidebar";

const BlogPageSingle = () => {
  return (
    <section className="blog-page-single">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <BlogPageSingleContent />
          </Col>
          <Col xl={4} lg={5}>
            <BlogPageTwoSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogPageSingle;
