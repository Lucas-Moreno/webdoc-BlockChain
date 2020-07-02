import React from 'react';
import ChapterHeader from '../ChapterHeader/ChapterHeader';
import ChapterOnePartOne from './ChapterParts/ChapterOnePartOne';

const ChapterOne = () => {
  return (
    <div className="chapter chapter--one">
      <ChapterHeader />
      <ChapterOnePartOne />
    </div>
  );
};

export default ChapterOne;
