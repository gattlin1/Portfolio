import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItem.scss';

interface NavigationItemProps {
  to: string;
  children: string | JSX.Element;
  id?: string;
}
function NavigationItem({ to, children, id }: NavigationItemProps) {
  return (
    <NavLink id={id} className='nav-item' to={to}>
      {children}
    </NavLink>
  );
}

export default NavigationItem;
