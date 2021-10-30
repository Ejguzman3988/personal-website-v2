import React from "react";
import "./EntryPage.css";
import logo from "../../images/logo.png";

const EntryPage = () => {
  return (
    <div className="entry__container">
      <div className="entry__content">
        <div className="entry__front">
          <img src={logo} alt="logo" className="entry__logo" />{" "}
        </div>
        <div className="entry__back">
          <div className="entry__info">I'm, </div>
          <div className="entry__name">Eriberto Guzman</div>
          <div className="entry__position">Software Engineer</div>
          <div className="entry__skills">
            React/Redux/Ruby on Rails/NodeJS/Express
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryPage;
