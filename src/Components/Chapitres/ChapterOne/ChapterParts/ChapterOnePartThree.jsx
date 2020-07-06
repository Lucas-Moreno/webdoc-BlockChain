import React from 'react';
import { InView } from 'react-intersection-observer';
import { ChapterOnePartThreeScript } from './ChapterOnePartThree.js'

const ChapterOnePartThree = () => {
  return (
    <InView
      as="div"
      threshold={0.25}
      onChange={(inView, entry) => ChapterOnePartThreeScript(inView)}
    >
      <div className="part part--three">
        <div className="contents">
          <h1>CONTENT PART 3 OF CHAPTER 1</h1>
        </div>
      </div>
    </InView>
  );
};

export default ChapterOnePartThree;
