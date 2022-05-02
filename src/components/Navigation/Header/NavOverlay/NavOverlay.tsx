import React from 'react';
import Links from '../../SocialMediaLinks/SocialMediaLinks';
import NavigationItems from '../../NavigationItems/NavigationItems';

import './NavOverlay.scss';
import CardLink from '../../../UI/Card/CardLink/CardLink';

interface NavOverlayProps {
  show: boolean;
  onClose: () => void;
}

function NavOverlay({ show, onClose }: NavOverlayProps) {
  const overlayClasses = ['nav-overlay'];

  document.body.style.overflowY = 'scroll';

  if (show) {
    overlayClasses.push('show');
    window.scrollTo(0, 0);
    document.body.style.overflowY = 'hidden';
  }

  return (
    <div className={overlayClasses.join(' ')} aria-label='Navigation Overlay'>
      <NavigationItems clicked={onClose} />
      <Links />
      <div className='resume'>
        <CardLink to='images/resume/Gattlin Resume.pdf' isExternal>
          My Resume
        </CardLink>
      </div>
    </div>
  );
}

export default NavOverlay;
