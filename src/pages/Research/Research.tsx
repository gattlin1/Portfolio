import React from 'react';
import Accordian from '../../components/Navigation/UI/Accordian/Accordian';

import './Research.scss';

function Research() {
  const research = [
    {
      title: 'A research title 1',
      link: '#',
      authors: ['Gattlin Walker', 'Patrick Ayres'],
      date: '2020',
      summary: <p>Some brief info about the paper</p>,
    },

    {
      title: 'A research title 2',
      link: '#',
      authors: ['Gattlin Walker', 'Patrick Ayres'],
      date: '2020',
      summary: <p>Some brief info about the paper</p>,
    },
    {
      title: 'A research title 3',
      link: '#',
      authors: ['Gattlin Walker', 'Patrick Ayres'],
      date: '2020',
      summary: <p>Some brief info about the paper</p>,
    },
    {
      title: 'A research title 4',
      link: '#',
      authors: ['Gattlin Walker'],
      date: '2020',
      summary: <p>Some brief info about the paper</p>,
    },
  ];

  return (
    <div className='research'>
      {research.map(({ title, link, authors, date, summary }) => (
        <Accordian
          key={title}
          title={title}
          link={link}
          linkName='Full Paper'
          authors={authors}
          date={date}
        >
          {summary}
        </Accordian>
      ))}
    </div>
  );
}

export default Research;
