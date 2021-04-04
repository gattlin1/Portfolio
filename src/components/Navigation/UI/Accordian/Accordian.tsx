import React, { useState } from 'react';
import './Accordian.scss';

interface CardProps {
  children: JSX.Element[] | JSX.Element;
  title: string;
  link: string;
  authors: string[];
  date: string;
  linkName: string;
}

function Card({ title, children, link, authors, date, linkName }: CardProps) {
  const [showInfo, toggleShowInfo] = useState(false);
  const onToggleInfo = () => {
    toggleShowInfo(!showInfo);
  };

  const toggleBtnClasses = ['fas', 'fa-chevron-right'];
  const bodyClasses = ['body'];

  if (showInfo) {
    bodyClasses.push('open');
    toggleBtnClasses.push('open');
  }

  return (
    <div className='card'>
      <div className='title' onClick={onToggleInfo}>
        <i className={toggleBtnClasses.join(' ')}></i>
        <h2>{title}</h2>
        <span>{date}</span>
      </div>
      <div className={bodyClasses.join(' ')}>
        <p>
          <strong>Authors:</strong> {authors.join(', ')}
        </p>
        {children}
        <a href={link}>{linkName}</a>
      </div>
    </div>
  );
}

export default Card;
