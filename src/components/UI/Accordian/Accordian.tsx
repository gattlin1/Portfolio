import React, { useState } from 'react';
import './Accordian.scss';

interface AccordianProps {
  children: JSX.Element[] | JSX.Element;
  title: string;
  key: string;
  link: string;
  authors: string[];
  advisors?: string[];
  date: string;
  initialState: boolean;
  id: string;
}

function Accordian({
  title,
  key,
  children,
  link,
  authors,
  advisors,
  date,
  initialState,
  id,
}: AccordianProps) {
  const [showInfo, toggleShowInfo] = useState(initialState);
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
    <div id={id} key={key} className='accordian'>
      <div className='title' onClick={onToggleInfo}>
        <i className={toggleBtnClasses.join(' ')}></i>
        <h2>{title}</h2>
        <div>{date}</div>
      </div>
      <div className={bodyClasses.join(' ')}>
        <p>
          <strong>Author(s):</strong> <span>{authors.join(', ')}</span>
        </p>
        {children}
        <a href={link} target='_blank' rel='noreferrer'>
          Full Paper
        </a>
      </div>
    </div>
  );
}

export default Accordian;
