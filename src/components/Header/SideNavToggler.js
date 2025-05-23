import React from "react";

const SideNavToggler = ({ onClick }) => {
  return (
    <a
      onClick={onClick}
      className="side-nav-toggler nav-toggler hidden-bar-opener"
    >
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </a>
  );
};

export default SideNavToggler;
