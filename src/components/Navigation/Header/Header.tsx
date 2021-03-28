import React from 'react';

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
        <i className='fas fa-bars' onClick={onOpenSideDrawer}></i>
      </nav>
    </header>
  );
}

export default Header;
