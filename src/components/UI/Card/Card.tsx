import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.scss';

interface CardProps {
  title: string;
  children: JSX.Element[] | JSX.Element;
  media?: JSX.Element;
  link?: string;
}

function Card({ title, children, media, link }: CardProps) {
  return (
    <div className='card'>
      <div className='title'>
        {link ? (
          <NavLink to={link}>
            <h2>{title}</h2>
          </NavLink>
        ) : (
          <h2>{title}</h2>
        )}
      </div>
      <hr />
      {media && <div className='media'>{media}</div>}
      <div className='body'>{children}</div>
    </div>
  );
}

export default Card;
