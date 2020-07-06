import React from 'react';
import { InView } from 'react-intersection-observer';
import { ChapterOnePartTwoScript } from './ChapterOnePartTwo.js'

const ChapterOnePartTwo = () => {
  return (
    <InView
      as="div"
      threshold={0.25}
      onChange={(inView, entry) => ChapterOnePartTwoScript(inView)}
    >
      <div className="part part--two">
        <div className="contents">
          <h1>CONTENT PART 2 OF CHAPTER 1</h1>
        </div>
      </div>
    </InView>
  );
};

export default ChapterOnePartTwo;
