import { blogPageTwoSidebar } from "@/data/blog";
import React from "react";
import { Image } from "react-bootstrap";
import { TextSplit } from "../Reuseable";
import ContactInfo from "../Services/ContactInfo";

const { sidebarInfo, categories, stories } = blogPageTwoSidebar;

const BlogPageTwoSidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__single sidebar__categories fadeInUp animated">
        <div className="title">
          <h2>Categories</h2>
        </div>
        <ul className="sidebar__categories-link">
          {categories.map(({ id, name, href, count }) => (
            <li className={id === 1 ? "active" : ""} key={id}>
              <a href={href}>
                {name} <span>{count}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar__single sidebar__popular-stories fadeInUp animated">
        <div className="title">
          <h2>Popular Stories</h2>
        </div>
        <ul className="sidebar__popular-stories-box">
          {stories.map(({ id, title, date, image }) => (
            <li key={id}>
              <div className="img">
                <Image
                  src={require(`@/images/resources/${image}`).default.src}
                  alt=""
                />
              </div>
              <div className="text">
                <h4>
                  <TextSplit text={title} as="a" href="#" />
                </h4>
                <p>{date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <ContactInfo
        info={sidebarInfo}
        className="sidebar__single sidebar__contact-box"
      />
    </div>
  );
};

export default BlogPageTwoSidebar;
