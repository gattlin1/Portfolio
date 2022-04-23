import React, { useState } from 'react';
import NavOverlay from '../NavOverlay/NavOverlay';
import OverlayBtn from './OverlayBtn/OverlayBtn';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

import './Header.scss';

function Header() {
  const [showOverlay, toggleOverlay] = useState(false);

  const handleOverlayToggle = () => {
    toggleOverlay(!showOverlay);
  };

  return (
    <header>
      <nav>
        <div id='home'>
          <NavigationItem to=''>Gattlin Walker</NavigationItem>
        </div>
        <OverlayBtn show={showOverlay} clicked={handleOverlayToggle} />
      </nav>
      <NavOverlay show={showOverlay} onCloseSidedrawer={handleOverlayToggle} />
    </header>
  );
}

export default Header;
