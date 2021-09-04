import React from 'react';
import { NavLink } from 'react-router-dom';

import './Button.scss';

interface ButtonProps {
  to: string;
  children: string;
}

const Button = ({ to, children }: ButtonProps) => {
  return (
    <NavLink className='button' to={to}>
      {children}
    </NavLink>
  );
};

export default Button;
