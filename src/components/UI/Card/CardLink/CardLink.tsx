import React from 'react';
import { Link } from 'react-router-dom';

import './CardLink.scss';

interface CardLinkProps {
  children: string;
  to: string;
}

function CardLink({ children, to }: CardLinkProps) {
  return (
    <Link className='card-link' to={to}>
      {children}
    </Link>
  );
}

export default CardLink;
