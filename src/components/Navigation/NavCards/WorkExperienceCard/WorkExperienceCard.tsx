import React from 'react';
import Button from '../../../UI/Button/Button';
import Card from '../../../UI/Card/Card';
import DuckCreekLogo from './DuckCreekLogo/DuckCreekLogo';

const WorkExperienceCard = () => {
  return (
    <Card title='Work Experience' media={<DuckCreekLogo />} link='/experience'>
      <>
        <p>
          My experience in the industry and personal projects I have developed.
        </p>
        <Button to='/experience'>Learn More</Button>
      </>
    </Card>
  );
};

export default WorkExperienceCard;
