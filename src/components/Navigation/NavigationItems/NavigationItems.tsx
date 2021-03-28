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
        <NavigationItem to='/research'>Research</NavigationItem>
        <NavigationItem to='/resume'>Resume</NavigationItem>
      </span>
    </div>
  );
}

export default NavigationItems;
