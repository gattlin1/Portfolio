import React from 'react';
import { Link } from 'react-router-dom';

import './CardLink.scss';

interface CardLinkProps {
  children: string;
  to: string;
  isExternal?: boolean;
}

function CardLink({ children, to, isExternal = false }: CardLinkProps) {
  const cardLink = isExternal ? (
    <a className='card-link' href={to} target='_blank' rel='noreferrer'>
      {children}
    </a>
  ) : (
    <Link className='card-link' to={to}>
      {children}
    </Link>
  );

  return cardLink;
}

export default CardLink;
