import React from 'react';
import CardLink from '../../UI/Card/CardLink/CardLink';
import Card from '../../UI/Card/Card';
import AboutLogo from '../../Logo/Logos/AboutLogo';

function AboutCard() {
  return (
    <Card title='About' media={<AboutLogo />}>
      <>
        <p className='text-color-gray'>
          In my free time I enjoy playing chess, reading, and working on side
          projects.
        </p>
        <CardLink to='/about'>Learn More</CardLink>
      </>
    </Card>
  );
}

export default AboutCard;
