import React from 'react';
import AccordianItem from './AccordianItem/AccordianItem';
import './Accordian.scss';

interface AccordianProps {
  items: {
    title: string;
    date: string;
    initialState: boolean;
    id: string;
    content: JSX.Element[] | JSX.Element;
  }[];
}

function Accordian2({ items }: AccordianProps) {
  return (
    <div className='accordian'>
      {items.map((item) => (
        <AccordianItem {...item}></AccordianItem>
      ))}
    </div>
  );
}

export default Accordian2;
