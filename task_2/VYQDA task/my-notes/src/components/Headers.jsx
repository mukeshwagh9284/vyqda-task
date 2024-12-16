import React from "react";
import { FiAlignLeft } from "react-icons/fi";
const Headers = () => {
  return (
    <nav className="navbar navbar-light  bg-danger bg-gradient">
      <div className="container-fluid">
        <a className="navbar-brand">
          {/* <img
            src="/docs/5.0/assets/brand/bootstrap-logo.svg"
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          /> */}
          <FiAlignLeft />
          Notes
        </a>
      </div>
    </nav>
  );
};

export default Headers;
