import React, { useState } from 'react';
import NavOverlay from './NavOverlay/NavOverlay';
import OverlayBtn from './OverlayBtn/OverlayBtn';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

import './Header.scss';

function Header() {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleOverlayToggle = () => {
    setShowOverlay(!showOverlay);
  };

  const closeOverlayToggle = () => {
    setShowOverlay(false);
  };

  return (
    <header role='navigation' aria-label='Main'>
      <nav>
        <div id='home' onClick={() => closeOverlayToggle()}>
          <NavigationItem to=''>Gattlin Walker</NavigationItem>
        </div>
        <OverlayBtn show={showOverlay} clicked={handleOverlayToggle} />
      </nav>
      <NavOverlay show={showOverlay} onClose={closeOverlayToggle} />
    </header>
  );
}

export default Header;
