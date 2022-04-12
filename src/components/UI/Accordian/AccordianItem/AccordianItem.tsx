import React, { useState } from 'react';
import './AccordianItem.scss';

export interface AccordianItemProps {
  id: string;
  title: string;
  date: string;
  content: JSX.Element[] | JSX.Element;
  initialState: boolean;
}

function AccordianItem({
  id,
  title,
  date,
  content,
  initialState,
}: AccordianItemProps) {
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
    <div id={id} className='accordian-item'>
      <div className='title' onClick={() => onToggleInfo()}>
        <i className={toggleBtnClasses.join(' ')}></i>
        <h2>{title}</h2>
        <div>{date}</div>
      </div>
      <div className={bodyClasses.join(' ')}>{content}</div>
    </div>
  );
}

export default AccordianItem;
