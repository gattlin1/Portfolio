import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import './NavigationItems.scss';

interface NavigationItemsProps {
  isSideDrawer: boolean;
  clicked?: () => void;
}

function NavigationItems({ isSideDrawer, clicked }: NavigationItemsProps) {
  return (
    <div onClick={clicked} className='nav-items'>
      {!isSideDrawer && (
        <NavigationItem to='/' id='title'>
          Gattlin Walker
        </NavigationItem>
      )}

      <span id='pages'>
        <NavigationItem to='/experience'>Experience</NavigationItem>
        <NavigationItem to='/education'>Education</NavigationItem>
        <NavigationItem to='/research'>Research</NavigationItem>
        <NavigationItem to='/cv'>CV</NavigationItem>
      </span>
    </div>
  );
}

export default NavigationItems;
