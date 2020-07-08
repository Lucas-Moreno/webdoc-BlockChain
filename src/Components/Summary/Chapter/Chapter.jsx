import React, { useEffect, useState } from 'react';
import rightArrow from '../../../Assets/images/right-arrow.png';
import Illustration from '../../../Assets/images/disclaimerImg.png';
import { Link } from 'react-router-dom';

const Chapter = (props) => {
  return (
    <div className="summary__contents">
      <div className="illustration">
        <img src={Illustration} alt="" />
      </div>
      <div className="content">
        <h1 className="content__title">{props.title}</h1>
        <div className="content__text">{props.text}</div>
        <div
          className={`content__launch ${props.disable}`}
          title={props.attrTitle}
        >
          <Link to={props.path}>
            <div className="launch">
              <span className="launch__text">{props.button}</span>
              <img
                className={`launch__arrow ${props.disable}`}
                src={rightArrow}
                alt=""
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chapter;
