import React from 'react';

import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header>
      <nav>
        <NavLink to='/' id='title'>
          Gattlin Walker
        </NavLink>
        <i className='fas fa-bars'></i>
        <div id='pages'>
          <NavLink to='/research'>Research</NavLink>
          <NavLink to='/resume'>Resume</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
