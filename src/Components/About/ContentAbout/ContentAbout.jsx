import React from "react";
import Illustration from "../../../Assets/images/creditsImg.png";

const ContentAbout = props => {
  return (
    <div className="about__contents">
      <div className="illustration">
        <img src={Illustration} alt="" />
      </div>
      <div className="content">
        <h1 className="content__title">{props.title}</h1>
        <div className="content__text">{props.text}</div>
      </div>
    </div>
  );
};

export default ContentAbout;
