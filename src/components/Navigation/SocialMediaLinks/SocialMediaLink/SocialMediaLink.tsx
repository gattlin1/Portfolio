import React from 'react';

import './SocialMediaLink.scss';

export interface LinkProps {
  name: string;
  url: string;
  iconClass: string;
}

function SocialMediaLink({ name, url, iconClass }: LinkProps) {
  return (
    <a
      className='link'
      href={url}
      title={name}
      target='_blank'
      rel='noreferrer'
    >
      <i className={iconClass}></i>
    </a>
  );
}

export default SocialMediaLink;
