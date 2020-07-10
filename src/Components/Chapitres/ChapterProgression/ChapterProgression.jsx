import React from 'react';
import $ from 'jquery';

const ChapterProgression = () => {
  const scrollToPart = (e) => {
    const elClicked = e.target;
    if (elClicked.classList.contains('step-one')) {
      const container = $('.part--one');
      let containerOffsetLeft = container.offset().left;
      window.scrollTo({
        left: containerOffsetLeft,
        behavior: 'smooth',
      });
    } else if (elClicked.classList.contains('step-two')) {
      const container = $('.part--two');
      let containerOffsetLeft = container.offset().left;
      window.scrollTo({
        left: containerOffsetLeft,
        behavior: 'smooth',
      });
    } else if (elClicked.classList.contains('step-three')) {
      const container = $('.part--three');
      let containerOffsetLeft = container.offset().left;
      window.scrollTo({
        left: containerOffsetLeft,
        behavior: 'smooth',
      });
    } else if (elClicked.classList.contains('step-four')) {
      const container = $('.part--four');
      let containerOffsetLeft = container.offset().left;
      window.scrollTo({
        left: containerOffsetLeft,
        behavior: 'smooth',
      });
    } else if (elClicked.classList.contains('step-five')) {
      const container = $('.part--five');
      let containerOffsetLeft = container.offset().left;
      window.scrollTo({
        left: containerOffsetLeft,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div>
      <div className="progression">
        <div className="progression__step step-one" onClick={scrollToPart}>
          <span className="step step-one">1</span>
        </div>
        <div className="progression__step step-two" onClick={scrollToPart}>
          <span className="step step-two">2</span>
        </div>
        <div className="progression__step step-three" onClick={scrollToPart}>
          <span className="step step-three">3</span>
        </div>
        <div className="progression__step step-four" onClick={scrollToPart}>
          <span className="step step-four">4</span>
        </div>
        <div className="progression__step step-five" onClick={scrollToPart}>
          <span className="step step-five">5</span>
        </div>
      </div>
    </div>
  );
};

export default ChapterProgression;
