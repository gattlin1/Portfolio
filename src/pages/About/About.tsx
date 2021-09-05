import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WorkExperienceCard from '../../components/Navigation/NavCards/WorkExperienceCard/WorkExperienceCard';
import ResearchCard from '../../components/Navigation/NavCards/ResearchCard/ResearchCard';

import './About.scss';

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
        from Missouri State University with a 3.97 GPA. My most memorable
        academic experience was performing research for the{' '}
        <Link to='/research#nasaPaper'>
          NASA - National Aeronautics and Space Administration.
        </Link>
      </p>
      <p>
        Currently I am a software engineer for Duck Creek Technologies. I was an
        intern there for about two years and was hired on full time the summer
        of my graduating year in 2020.
      </p>
      <div className='nav-cards'>
        <WorkExperienceCard />
        <ResearchCard />
      </div>
    </div>
  );
}

export default About;
