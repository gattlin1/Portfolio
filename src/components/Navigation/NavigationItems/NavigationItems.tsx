import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

interface NavigationItemsProps {
  clicked?: () => void;
}

function NavigationItems({ clicked }: NavigationItemsProps) {
  return (
    <div onClick={clicked} className='nav-items'>
      <div id='pages'>
        <NavigationItem to='/'>Home</NavigationItem>
        <NavigationItem to='/experience'>Experience</NavigationItem>
        <NavigationItem to='/education'>Education</NavigationItem>
        <NavigationItem to='/about'>About</NavigationItem>
      </div>
    </div>
  );
}

export default NavigationItems;
