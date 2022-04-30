import React, { useState } from 'react';
import NavOverlay from './NavOverlay/NavOverlay';
import OverlayBtn from './OverlayBtn/OverlayBtn';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

import './Header.scss';

function Header() {
  const [showOverlay, toggleOverlay] = useState(false);

  const handleOverlayToggle = () => {
    toggleOverlay(!showOverlay);
  };

  return (
    <header role='navigation' aria-label='Main'>
      <nav>
        <div id='home' onClick={() => handleOverlayToggle()}>
          <NavigationItem to=''>Gattlin Walker</NavigationItem>
        </div>
        <OverlayBtn show={showOverlay} clicked={handleOverlayToggle} />
      </nav>
      <NavOverlay show={showOverlay} onClose={handleOverlayToggle} />
    </header>
  );
}

export default Header;
