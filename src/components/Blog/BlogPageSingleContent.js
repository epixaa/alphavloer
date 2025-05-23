import { blogPageSingleContent } from "@/data/blog";
import React from "react";
import { Image } from "react-bootstrap";
import { TextSplit } from "../Reuseable";
import AddCommentBox from "./AddCommentBox";

const {
  image,
  tagline,
  title,
  date,
  views,
  text,
  text2,
  quoteIcon,
  quoteText,
  authorName,
  text3,
  text4,
  pagination,
  share,
  arrowIcon,
  commentTitle,
  commentText,
} = blogPageSingleContent;

const BlogPageSingleContent = () => {
  return (
    <div className="blog-page-single__content">
      <div className="blog-page-two__single">
        <div className="blog-page-two__single-img">
          <Image src={image.src} alt="" />
        </div>
        <div className="blog-page-two__single-content">
          <div className="blog-page-two__single-title">
            <p className="blog-page-two__single-tagline">{tagline}</p>
            <TextSplit
              text={title}
              as="h2"
              className="blog-page-two__single-headding"
            />
          </div>
          <ul className="blog-page-two__single-meta-info">
            <li>
              <i className="fa fa-calendar" aria-hidden={true}></i>
              {date}
            </li>
            <li>
              <i className="fa fa-eye" aria-hidden={true}></i>
              {views} Views
            </li>
          </ul>
          <p className="blog-page-two__single-text">{text}</p>
        </div>
      </div>
      <div className="text-2">
        <p>{text2}</p>
      </div>
      <div className="blog-page-single__blockquote">
        <div className="blog-page-single__blockquote-icon">
          <span className={quoteIcon}></span>
        </div>
        <div className="blog-page-single__blockquote-text">
          <p>{quoteText}</p>
          <h4 className="blog-page-single__author-name">{authorName}</h4>
        </div>
      </div>
      <div className="text-3">
        <p>{text3}</p>
      </div>
      <div className="text-4">
        <p>{text4}</p>
      </div>
      <div className="blog-page-single__tag-and-share">
        {share.map(({ id, className, icon, text }) => (
          <div key={id} className={className}>
            <div className="icon">
              <i className={icon} aria-hidden={true}></i>
            </div>
            <div className="text">
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="blog-page-single__pagination">
        <ul>
          {pagination.map(({ id, text, image, className }) => (
            <li key={id}>
              <div className={className}>
                <h4>
                  <TextSplit text={text} as="a" href="#" />
                </h4>
              </div>
              <div className="icon">
                <a href="#">
                  <Image src={image.src} alt="" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <AddCommentBox
        arrowIcon={arrowIcon}
        commentTitle={commentTitle}
        commentText={commentText}
      />
    </div>
  );
};

export default BlogPageSingleContent;
