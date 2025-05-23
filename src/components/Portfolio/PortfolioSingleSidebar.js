import { portfolioSingleSidebar } from "@/data/portfolio";
import React from "react";
import { TextSplit } from "../Reuseable";
import ContactInfo from "../Services/ContactInfo";

const { sidebarInfo, authorBox, socials } = portfolioSingleSidebar;

const PortfolioSingleSidebar = () => {
  return (
    <div className="services-single__sidebar services-single__sidebar--protfolio">
      <ContactInfo info={sidebarInfo} />
      <div className="author-box">
        <ul>
          {authorBox.map((text, i) => (
            <li key={i}>
              <TextSplit text={text} as={i ? "p" : "h6"} />
            </li>
          ))}
        </ul>
      </div>
      <div className="services-single__sidebar--protfolio-social-link">
        <ul>
          {socials.map(({ id, icon, href }) => (
            <li key={id} className="me-1">
              <a href={href} className={id === 1 ? "active" : ""}>
                <span className={icon}></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PortfolioSingleSidebar;
