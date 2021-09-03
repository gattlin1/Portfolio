import React from 'react';
import './Card.scss';

interface CardProps {
  title: string;
  children: JSX.Element[] | JSX.Element;
  media?: any;
}

function Card({ title, children, media }: CardProps) {
  return (
    <div className='card'>
      <div className='title'>
        <h2>{title}</h2>
      </div>
      <hr />
      {media && <div className='media'>{media}</div>}
      <div className='body'>{children}</div>
    </div>
  );
}

export default Card;
