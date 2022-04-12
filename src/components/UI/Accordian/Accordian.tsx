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

function Accordian({ items }: AccordianProps) {
  return (
    <div className='accordian'>
      {items.map(({ id, ...item }) => (
        <div key={id}>
          <AccordianItem id={id} {...item}></AccordianItem>
        </div>
      ))}
    </div>
  );
}

export default Accordian;
