import React from 'react';
import Links from '../../SocialMediaLinks/SocialMediaLinks';
import NavigationItems from '../../NavigationItems/NavigationItems';

import './NavOverlay.scss';

interface NavOverlayProps {
  show: boolean;
  onClose: () => void;
}

function NavOverlay({ show, onClose }: NavOverlayProps) {
  const overlayClasses = ['nav-overlay'];

  document.body.style.overflowY = 'scroll';

  if (show) {
    overlayClasses.push('show');
    document.body.style.overflowY = 'hidden';
  }

  return (
    <div className={overlayClasses.join(' ')} aria-label='Navigation Overlay'>
      <NavigationItems clicked={onClose} />
      <Links />
    </div>
  );
}

export default NavOverlay;
