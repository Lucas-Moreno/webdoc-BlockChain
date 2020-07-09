import React, { useEffect } from 'react';
import { Chapters } from '../Chapters';
import ChapterHeader from '../ChapterHeader/ChapterHeader';
import ChapterNavigation from '../ChapterNavigation/ChapterNavigation';
import IconReplay from '../../Icons/IconReplay.jsx';
import IconSkip from '../../Icons/IconSkip.jsx';
import ChapterOnePartOne from './ChapterParts/ChapterOnePartOne.jsx';
import ChapterOnePartTwo from './ChapterParts/ChapterOnePartTwo.jsx';
import ChapterOnePartThree from './ChapterParts/ChapterOnePartThree.jsx';
import ChapterOnePartFour from './ChapterParts/ChapterOnePartFour.jsx';
import ChapterOnePartFive from './ChapterParts/ChapterOnePartFive.jsx';

const ChapterOne = () => {
  useEffect(() => {
    Chapters();
  });

  return (
    <div className="chapter chapter--one">
      <ChapterNavigation />
      <ChapterHeader />
      <div className="parts">
        <ChapterOnePartOne />
        <ChapterOnePartTwo />
        <ChapterOnePartThree />
        <ChapterOnePartFour />
        <ChapterOnePartFive />
      </div>
      <div className="icons">
        <IconSkip />
        <IconReplay />
      </div>
    </div>
  );
};

export default ChapterOne;
