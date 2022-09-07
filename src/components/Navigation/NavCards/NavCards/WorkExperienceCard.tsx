import React from 'react';
import CardLink from '../../../UI/Card/CardLink/CardLink';
import Card from '../../../UI/Card/Card';
import SquareLogo from '../../../Logo/Logos/SquareLogo';

function WorkExperienceCard() {
  return (
    <Card title='Experience' media={<SquareLogo />}>
      <>
        <p className='text-color-gray'>
          My experience in the industry and personal projects I have developed
        </p>
        <CardLink to='/experience'>Learn More</CardLink>
      </>
    </Card>
  );
}

export default WorkExperienceCard;
