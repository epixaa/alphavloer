import React from "react";
import { Col, Row } from "react-bootstrap";

const Pagination = () => {
  return (
    <Row>
      <Col xl={12}>
        <ul className="styled-pagination clearfix">
          {Array.from(Array(4)).map((_, i) => (
            <li key={i}>
              <a href="#" className={i ? "" : "active"}>
                {i + 1}
              </a>
            </li>
          ))}
          <li className="next">
            <a href="#">
              <span className="fa fa-chevron-right"></span>
            </a>
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default Pagination;
