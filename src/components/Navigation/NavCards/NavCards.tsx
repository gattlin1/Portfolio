import React from 'react';
import { useLocation } from 'react-router-dom';
import AboutCard from './AboutCard';
import EducationCard from './EducationCard';
import WorkExperienceCard from './WorkExperienceCard';
import './NavCards.scss';

function NavCards() {
  const location = useLocation();
  let navCards = [
    ['/experience', <WorkExperienceCard key={1} />],
    ['/education', <EducationCard key={2} />],
    ['/about', <AboutCard key={3} />],
  ];

  navCards = navCards.filter((navCard) => navCard[0] !== location.pathname);
  return (
    <div className='nav-cards-container'>
      <div className='nav-cards'>{navCards.map((navCard) => navCard[1])}</div>
    </div>
  );
}

export default NavCards;
