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

  if (show) {
    overlayClasses.push('show');
  }

  return (
    <div className={overlayClasses.join(' ')}>
      <NavigationItems clicked={onCloseSidedrawer} />
      <Links />
    </div>
  );
}

export default NavOverlay;
