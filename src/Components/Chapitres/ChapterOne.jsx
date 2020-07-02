import React from 'react';
import ProgressionLine from "./ProgressionLine/ProgressionLine"
import ChapterTitle from "./ChapterTitle/ChapterTitle"
import BurgerMenu from "./BurgerMenu/BurgerMenu"

const ChapterOne = () => {
  return (
    <div className="chapter chapter--one wrapper--chapter">
      <ChapterTitle />
      <BurgerMenu />
      <ProgressionLine />
    </div>
  );
};

export default ChapterOne;
