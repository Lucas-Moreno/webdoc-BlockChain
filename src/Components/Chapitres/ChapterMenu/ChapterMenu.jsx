import React from 'react'
import IconSound from '../../Icons/IconSound.jsx';

const ChapterMenu = () => {
    return (
      <div className="menu">
        <div className="menu__burger"></div>
        <div className="menu__sound">
          <IconSound />
        </div>
      </div>
    );
}

export default ChapterMenu