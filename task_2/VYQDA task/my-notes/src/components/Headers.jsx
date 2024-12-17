import React from "react";
import { FiAlignLeft } from "react-icons/fi";
const Headers = () => {
  return (
    <nav className="navbar navbar-light  bg-danger bg-gradient">
      <div className="container-fluid">
        <a className="navbar-brand">
          <FiAlignLeft />
          Notes
        </a>
      </div>
    </nav>
  );
};

export default Headers;
