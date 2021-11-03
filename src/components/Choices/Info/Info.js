import React from "react";
import { Link } from "react-router-dom";
import "./Info.css";

const Info = () => {
  return (
    <div className="info__container">
      <Link to="/resume" className="info__resume">
        Resume
      </Link>
      <Link to="/projects" className="info__projects">
        Projects
      </Link>
    </div>
  );
};

export default Info;
