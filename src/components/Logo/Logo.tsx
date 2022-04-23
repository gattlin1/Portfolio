import React from 'react';

import './Logo.scss';

interface LogoProps {
  className?: string;
  url: string;
  children: JSX.Element | JSX.Element[];
}

function Logo({ className, url, children }: LogoProps) {
  let classes = ['logo'];

  if (className) classes = classes.concat(className);
  if (url === '') classes = classes.concat('disabled');

  return (
    <a
      className={classes.join(' ')}
      href={url}
      target='_blank'
      rel='noreferrer'
    >
      {children}
    </a>
  );
}

export default Logo;
