import React from 'react';
import Logo from '../../Assets/images/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__title">
        <span className="text">Block</span>
        <span className="text">Chain</span>
      </div>
      <Link to="/">
        <div className="header__logo">
          <img src={Logo} alt="Logo" />
        </div>
      </Link>
    </header>
  );
};

export default Header;
