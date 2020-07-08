import React from "react";

const SliderHome = props => {
  return (
    <div className="slide">
      <h2 className="slide__subtitle">{props.title}</h2>
      <p className="slide__text">{props.text}</p>
    </div>
  );
};

export default SliderHome;
