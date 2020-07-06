import React from 'react';
import { InView } from 'react-intersection-observer';
import { ChapterOnePartFourScript } from './ChapterOnePartFour.js'

const ChapterOnePartFour = () => {
  return (
    <InView
      as="div"
      threshold={0.25}
      onChange={(inView, entry) => ChapterOnePartFourScript(inView)}
    >
      <div className="part part--four part--last">
        <div className="contents">
          <h1>CONTENT PART 4 OF CHAPTER 1</h1>
        </div>
      </div>
    </InView>
  );
};

export default ChapterOnePartFour;
