import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.scss';

interface CardProps {
  title: string;
  children: JSX.Element[] | JSX.Element;
  media?: JSX.Element;
  link?: string;
  className?: string;
}

function Card({ className, title, children, media, link }: CardProps) {
  const cardClass = className ? 'card ' + className : 'card';
  return (
    <div className={cardClass}>
      <div className='title'>
        {link ? (
          <NavLink to={link}>
            <h2>{title}</h2>
          </NavLink>
        ) : (
          <h2>{title}</h2>
        )}
      </div>
      {media && <div className='media'>{media}</div>}
      <div className='body'>{children}</div>
    </div>
  );
}

export default Card;
