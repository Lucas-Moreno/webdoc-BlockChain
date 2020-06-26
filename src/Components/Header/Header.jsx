import React from 'react';
import Logo from '../../Assets/images/logo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="Logo" />
      </div>
    </header>
  );
};

export default Header;
