import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';

import './Sidedrawer.scss';

interface SidedrawerProps {
  onCloseSidedrawer: () => void;
}

function Sidedrawer({ onCloseSidedrawer }: SidedrawerProps) {
  return (
    <div className='sidedrawer'>
      <div className='container'>
        <i className='fas fa-chevron-up' onClick={onCloseSidedrawer}></i>
        <NavigationItems isSideDrawer clicked={onCloseSidedrawer} />
      </div>
    </div>
  );
}

export default Sidedrawer;
