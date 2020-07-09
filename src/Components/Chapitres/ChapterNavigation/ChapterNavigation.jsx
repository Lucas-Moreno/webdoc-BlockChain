import React from 'react';
import { Link } from 'react-router-dom';

const ChapterNavigation = () => {
  const alertChapterBuilding = _ => {
    alert("Chapitre prochainement disponible")
  }
  return (
    <div className="chapter-navigation">
      <Link className="chapter chapter--one" to="/chapitre-un">
        <h1 className="chapter__title">Chapitre 1</h1>
      </Link>
      <div className="chapter chapter--two" onClick={alertChapterBuilding}>
        <h1 className="chapter__title">Chapitre 2</h1>
      </div>
      <div className="chapter chapter--three">
        <h1 className="chapter__title">Chapitre 3</h1>
      </div>
    </div>
  );
};

export default ChapterNavigation;
