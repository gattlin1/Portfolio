import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WorkExperienceCard from '../../components/Navigation/NavCards/WorkExperienceCard';
import ResearchCard from '../../components/Navigation/NavCards/ResearchCard';

import './About.scss';
import EducationCard from '../../components/Navigation/NavCards/EducationCard';
import CardLink from '../../components/UI/Card/CardLink/CardLink';

function About() {
  useEffect(() => {
    document.title = 'Gattlin Walker | Home';
  });
  return (
    <div className='about'>
      <h1>Hi, I'm Gattlin</h1>
      <p>
        I'm a software engineer. I was born in 1997 and grew up in southern
        Missouri. After high school I went on to get my BS in Computer Science
        from Missouri State University with a 3.93 GPA. My most memorable
        academic experience was performing research for the{' '}
        <Link to='/research#CNN Approach for IR Spectral Classification'>
          NASA Missouri Space Grant Consortium (MSOGC) Grant
        </Link>
        . The MSOGC Grant is a research scholarship given to select Missouri
        State University students based on faculty recommendations. Recipients
        are responsible for conducting a research project on NASA's ECOSTRESS
        data set. My research involved annotating spectra using statistical
        similarity algorithms, and also classifying by extracting spectral
        features using convolutional neural networks.
      </p>
      <p>
        Currently I am a software engineer for Duck Creek Technologies. I was an
        intern there for almost two years and was hired on full time the summer
        of my graduating year in 2020.
      </p>
      <div className='resume'>
        <CardLink to='images/Gattlin Resume - 2021.pdf' isExternal>
          My Resume
        </CardLink>
      </div>
      <div className='nav-cards'>
        <WorkExperienceCard />
        <EducationCard />
        <ResearchCard />
      </div>
    </div>
  );
}

export default About;
