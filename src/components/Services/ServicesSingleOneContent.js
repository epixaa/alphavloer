import { TextSplit } from "@/Reuseable";
import React from "react";
import { Image } from "react-bootstrap";

const ContentListSingle = ({ text = "" }) => {
  return (
    <li>
      <div className="icon">
        <span className="fa fa-check"></span>
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
    </li>
  );
};

const ServicesSingleOneContent = ({ service = {} }) => {
  const { title, text, text2, text3, image, contentList, contentBottomList } =
    service;

  return (
    <div className="services-single-one__content">
      <div className="title">
        <TextSplit text={title} as="h2" />
      </div>
      <div className="text1">
        <p>{text}</p>
      </div>
      <div className="text2">
        <p>{text2}</p>
      </div>
      <div className="services-single-one__content-list">
        <ul>
          {contentList.map((text, i) => (
            <ContentListSingle text={text} key={i} />
          ))}
        </ul>
      </div>
      <div className="text3">
        <p>{text3}</p>
      </div>
      <div className="services-single-one__content-bottom">
        <div className="services-single-one__content-bottom-img">
          <Image src={image.src} alt="" />
        </div>
        <div className="services-single-one__content-bottom-list">
          <ul>
            {contentBottomList.map((text, i) => (
              <ContentListSingle text={text} key={i} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesSingleOneContent;
