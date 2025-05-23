import classNames from "@/utils/classNames";
import React from "react";

/**
 * @param {{title?:string;tagline?:string;children?:React.ReactNode}&React.HTMLAttributes<HTMLDivElement>} props
 */

const Title = ({
  title = "",
  tagline = "",
  children,
  className = "",
  text = "",
  ...props
}) => {
  return (
    <div className={classNames("sec-title", className)} {...props}>
      {tagline && <span className="sec-title__tagline">{tagline}</span>}
      <h2 className="sec-title__title">{title || children}</h2>
      {text && <p className="sec-title__text">{text}</p>}
    </div>
  );
};

export default Title;
