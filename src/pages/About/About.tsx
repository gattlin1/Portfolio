import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardLink from '../../components/UI/Card/CardLink/CardLink';
import Card from '../../components/UI/Card/Card';
import Hobbies from '../../components/About/Hobbies/Hobbies';
import './About.scss';

function About() {
  useEffect(() => {
    document.title = 'Gattlin Walker | About';
  });

  return (
    <div className='about'>
      <Card id='about-card' title="Hi, I'm Gattlin">
        <div className='info-section'>
          <div className='info text-color-gray'>
            <p>
              I'm a software engineer. I was born in 1997 and grew up in
              Bolivar, Missouri. After high school I went to Missouri State
              University to get my BS in Computer Science. During my time at
              MSU, I developed a very detail oriented approach to development
              and have become very proficient in various areas such as web
              development, artificial intelligence, and parallel programming. My
              most memorable academic experience was performing research for the{' '}
              <Link to='/education#CNN Approach for IR Spectral Classification'>
                NASA Missouri Space Grant Consortium (MSOGC) Grant
              </Link>
              .
            </p>
            <p>
              Currently I work remotely as a software engineer for Duck Creek
              Technologies and live in Indianapolis, Indiana with my wife
              Jessie. At Duck Creek, I am the lead developer for the General
              Liability line of business and am tasked with all major changes
              involving the line.
            </p>
            <div className='resume'>
              <CardLink to='images/resume/Gattlin Resume.pdf' isExternal>
                My Resume
              </CardLink>
            </div>
          </div>
          <div className='avatar'>
            <img src='/images/avatar.png' alt='Me in a suit' />
          </div>
        </div>
      </Card>
      <Hobbies />
    </div>
  );
}

export default About;
