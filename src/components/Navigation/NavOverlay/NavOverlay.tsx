import React from 'react';
import Links from '../SocialMediaLinks/SocialMediaLinks';
import NavigationItems from '../NavigationItems/NavigationItems';

import './NavOverlay.scss';

interface SidedrawerProps {
  show: boolean;
  onCloseSidedrawer: () => void;
}

function NavOverlay({ show, onCloseSidedrawer }: SidedrawerProps) {
  const overlayClasses = ['nav-overlay'];

  document.body.style.overflowY = 'scroll';

  if (show) {
    overlayClasses.push('show');
    document.body.style.overflowY = 'hidden';
  }

  return (
    <div className={overlayClasses.join(' ')}>
      <NavigationItems clicked={onCloseSidedrawer} />
      <Links />
    </div>
  );
}

export default NavOverlay;
