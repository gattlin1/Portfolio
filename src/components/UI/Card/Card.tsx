import React from 'react';
import './Card.scss';

interface CardProps {
  title?: string;
  children: JSX.Element[] | JSX.Element;
  media?: JSX.Element;
  className?: string;
  id?: string;
  style?: {};
}

function Card({ className, title, children, media, id, style }: CardProps) {
  const cardClass = className ? 'card ' + className : 'card';
  return (
    <div id={id} className={cardClass} style={style}>
      {title && (
        <div className='title'>
          <h2>{title}</h2>
        </div>
      )}
      {media && <div className='media'>{media}</div>}
      <div className='body'>{children}</div>
    </div>
  );
}

export default Card;
