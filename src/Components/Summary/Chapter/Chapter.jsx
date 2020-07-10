import React, { useEffect, useState } from 'react';
import rightArrow from '../../../Assets/images/right-arrow.png';
import IllustrationChapterOne from '../../../Assets/images/illustration-chapter-one.png';
import IllustrationChapterTwo from '../../../Assets/images/illustration-chapter-two.png';
import IllustrationChapterThree from '../../../Assets/images/illustration-chapter-three.png';
import { Link } from 'react-router-dom';

const Chapter = (props) => {
  const getIllustration = (_) => {
    if (props.title === "Les failles d'un système") {
      return <img src={IllustrationChapterOne} alt="" />;
    } else if (props.title === 'Un rôle précis') {
      return <img src={IllustrationChapterTwo} alt="" />;
    } else if (props.title === 'Une innovation grandissante') {
      return <img src={IllustrationChapterThree} alt="" />;
    }
  };
  return (
    <div className="summary__contents">
      <div className="illustration">{getIllustration()}</div>
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
