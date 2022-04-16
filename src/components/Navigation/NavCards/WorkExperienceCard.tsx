import React from 'react';
import CardLink from '../../UI/Card/CardLink/CardLink';
import Card from '../../UI/Card/Card';
import DuckCreekLogo from '../../Logo/DuckCreekLogo/DuckCreekLogo';

function WorkExperienceCard() {
  return (
    <Card title='Experience' media={<DuckCreekLogo />}>
      <>
        <p>
          My experience in the industry and personal projects I have developed.
        </p>
        <CardLink to='/experience'>Learn More</CardLink>
      </>
    </Card>
  );
}

export default WorkExperienceCard;
