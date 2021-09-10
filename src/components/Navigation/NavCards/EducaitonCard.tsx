import React from 'react';
import CardLink from '../../UI/Card/CardLink/CardLink';
import Card from '../../UI/Card/Card';
import MSULogo from '../../Logo/MSULogo/MSULogo';

function EducationCard() {
  return (
    <Card title='Education' media={<MSULogo />}>
      <>
        <p>
          I attented Missouri State University for a BS in Computer Science and
          a minor in Mathematics
        </p>
        <CardLink to='/education'>Learn More</CardLink>
      </>
    </Card>
  );
}

export default EducationCard;
