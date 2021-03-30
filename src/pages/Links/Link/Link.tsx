import React from 'react';

import './Link.scss';

export interface LinkProps {
  name: string;
  url: string;
  iconClass: string;
}

function Link({ name, url, iconClass }: LinkProps) {
  return (
    <a className='link' href={url}>
      <i className={iconClass}></i>
      <div>{name}</div>
    </a>
  );
}

export default Link;
