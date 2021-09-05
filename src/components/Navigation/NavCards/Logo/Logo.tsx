import React from 'react';

import './Logo.scss';

interface LogoProps {
  url: string;
  children: JSX.Element | JSX.Element[];
}

const Logo = ({ url, children }: LogoProps) => {
  return (
    <a className='logo' href={url} target='_blank' rel='noreferrer'>
      {children}
    </a>
  );
};

export default Logo;
