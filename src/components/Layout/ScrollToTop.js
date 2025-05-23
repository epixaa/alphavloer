import useScroll from "@/hooks/useScroll";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

const ScrollToTop = () => {
  const { scrollTop } = useScroll(100);

  if (!scrollTop) {
    return null;
  }

  return (
    <ScrollLink
      to="wrapper"
      smooth={true}
      duration={500}
      id="backToTop"
      style={{ cursor: "pointer" }}
      className="scroll-to-target scroll-to-top d-inline-block fadeIn animated"
    >
      <i className="icon-next"></i>
    </ScrollLink>
  );
};

export default ScrollToTop;
