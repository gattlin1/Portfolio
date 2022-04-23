import React from 'react';
import SocialMediaLink from './SocialMediaLink/SocialMediaLink';
import { LinkProps as ILink } from './SocialMediaLink/SocialMediaLink';

function SocialMediaLinks() {
  const links: ILink[] = [
    {
      name: 'Github',
      url: 'https://github.com/gattlin1',
      iconClass: 'fab fa-github-square',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/gattlin-walker-2a27b9171/',
      iconClass: 'fab fa-linkedin',
    },
    {
      name: 'Email',
      url: 'mailto:gattlin28@gmail.com',
      iconClass: 'fa-solid fa-envelope',
    },
  ];

  return (
    <div className='links'>
      {links.map((link: ILink) => (
        <SocialMediaLink
          key={link.name}
          name={link.name}
          url={link.url}
          iconClass={link.iconClass}
        />
      ))}
    </div>
  );
}

export default SocialMediaLinks;
