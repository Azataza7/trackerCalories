import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-container container-fluid">
      <NavLink className="header-title" to="/">Calories tracker</NavLink>
    </div>
  );
};

export default Header;