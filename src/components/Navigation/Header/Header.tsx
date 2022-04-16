import React from 'react';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';
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
        <SocialMediaLinks />
      </nav>
    </header>
  );
}

export default Header;
