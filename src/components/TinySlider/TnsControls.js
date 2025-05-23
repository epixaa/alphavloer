import React from "react";

const TnsControls = () => {
  return (
    <div className="tns-controls">
      <button type="button" role="presentation" className="tns-prev">
        <i className="fa fa-chevron-left" aria-hidden={true}></i>
      </button>
      <button type="button" role="presentation" className="tns-next">
        <i className="fa fa-chevron-right" aria-hidden={true}></i>
      </button>
    </div>
  );
};

export default TnsControls;
