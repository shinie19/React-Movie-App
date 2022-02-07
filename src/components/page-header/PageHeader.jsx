import React from "react";
import "./page-header.scss";
import bg from "../../assets/footer-bg.jpg";

function PageHeader(props) {
  const { children } = props;

  return (
    <div className="page-header" style={{ background: `url(${bg})` }}>
      <h2>{children}</h2>
    </div>
  );
}

export default PageHeader;
