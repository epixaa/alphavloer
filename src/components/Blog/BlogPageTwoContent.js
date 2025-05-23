import { blogPageTwoContent } from "@/data/blog";
import { Link } from "@/Reuseable";
import React from "react";
import { Image } from "react-bootstrap";
import Pagination from "./Pagination";

const BlogPageTwoContent = () => {
  return (
    <div className="blog-page-two__content">
      {blogPageTwoContent.map(
        ({ id, image, tagline, title, date, views, text, readingIcon }) => (
          <div key={id} className="blog-page-two__single">
            <div className="blog-page-two__single-img">
              <Image
                src={require(`@/images/blog/${image}`).default.src}
                alt=""
              />
            </div>
            <div className="blog-page-two__single-content">
              <div className="blog-page-two__single-title">
                <p className="blog-page-two__single-tagline">{tagline}</p>
                <h2 className="blog-page-two__single-headding">
                  <Link href="/blog-single">{title}</Link>
                </h2>
              </div>
              <ul className="blog-page-two__single-meta-info">
                <li>
                  <i className="fa fa-calendar" aria-hidden="true"></i> {date}
                </li>
                <li>
                  <i className="fa fa-eye" aria-hidden="true"></i>
                  {views} Views
                </li>
              </ul>
              <p className="blog-page-two__single-text">{text}</p>
              <div className="blog-page-two__single-btn">
                <a href="#">
                  Reading <Image src={readingIcon.src} alt="" />
                </a>
              </div>
            </div>
          </div>
        )
      )}
      <Pagination />
    </div>
  );
};

export default BlogPageTwoContent;
