import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Choices.css";

//TODO: BUG WHEN CLICKED MULTIPLE TIMES ON ANIMATION.
const Choices = (props) => {
  const [clicked, setClicked] = useState({ info: false, journey: false });
  const ANI_TIME = 1;

  const handleClick = (e) => {
    e.preventDefault();
    setClicked((prevClicked) => {
      console.log("FROM SET CLICKED:", e.target.name);
      return {
        ...prevClicked,
        [e.target.name]: !prevClicked[e.target.name],
      };
    });
    setTimeout(
      () => props.history.push(`/${e.target.name}`),
      (ANI_TIME + 0.25) * 1000
    );
  };

  const createAnimation = (active, nonActive) => {
    // active is the cover screen
    // non active is the leave screen
    // both false do nothing
    if (!active && !nonActive) return null;
    if (active) {
      return { animation: `cover-screen ${ANI_TIME}s linear forwards` };
    } else {
      return { animation: `leave-screen ${ANI_TIME}s linear forwards` };
    }
  };

  return (
    <div className="choices">
      <Link
        to="/info"
        className="choices__info"
        name="info"
        style={createAnimation(clicked.info, clicked.journey)}
        onClick={handleClick}
      >
        <h1 className="choices__header">Info</h1>
      </Link>
      <Link
        to="/journey"
        className="choices__journey"
        name="journey"
        style={createAnimation(clicked.journey, clicked.info)}
        onClick={handleClick}
      >
        <h1 className="choices__header">Journey</h1>
      </Link>
    </div>
  );
};

export default Choices;
