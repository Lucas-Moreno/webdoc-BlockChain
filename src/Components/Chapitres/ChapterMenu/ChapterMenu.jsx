import React, { useState, useCallback } from 'react';
import IconSound from '../../Icons/IconSound.jsx';
import { HamburgerCollapse } from 'react-animated-burgers';

const ChapterMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleButton = useCallback(
    () => setIsActive((prevState) => !prevState),
    []
  );
  return (
    <div className="menu">
      <div className="menu__burger">
        <HamburgerCollapse barColor="white" {...{ isActive, toggleButton }} />
      </div>
      <div className="menu__sound">
        <IconSound />
      </div>
    </div>
  );
};

export default ChapterMenu;
