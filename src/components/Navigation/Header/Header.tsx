import React from 'react';
import Links from '../Links/Links';

import NavigationItems from '../NavigationItems/NavigationItems';
import './Header.scss';

interface HeaderProps {
  onOpenSideDrawer: () => void;
}

function Header({ onOpenSideDrawer }: HeaderProps) {
  return (
    <header>
      <nav>
        <NavigationItems isSideDrawer={false} />
        <i
          id='side-drawer'
          className='fas fa-bars'
          onClick={onOpenSideDrawer}
        ></i>
        <Links />
      </nav>
    </header>
  );
}

export default Header;
