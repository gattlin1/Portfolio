import React from 'react';
import Links from '../SocialMediaLinks/SocialMediaLinks';
import NavigationItems from '../NavigationItems/NavigationItems';

import './Sidedrawer.scss';

interface SidedrawerProps {
  onCloseSidedrawer: () => void;
}

function Sidedrawer({ onCloseSidedrawer }: SidedrawerProps) {
  return (
    <div className='sidedrawer'>
      <div className='container'>
        <i className='fas fa-times' onClick={onCloseSidedrawer}></i>
        <NavigationItems isSideDrawer clicked={onCloseSidedrawer} />
        <Links />
      </div>
    </div>
  );
}

export default Sidedrawer;
