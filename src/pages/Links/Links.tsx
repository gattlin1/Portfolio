import React from 'react';
import Link from './Link/Link';
import { LinkProps as ILink } from './Link/Link';

function Links() {
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
      name: 'Gmail',
      url: 'mailto:gattlin28@gmail.com',
      iconClass: 'fas fa-at',
    },
  ];
  return (
    <div>
      {links.map((link: ILink) => (
        <Link name={link.name} url={link.url} iconClass={link.iconClass} />
      ))}
    </div>
  );
}

export default Links;
