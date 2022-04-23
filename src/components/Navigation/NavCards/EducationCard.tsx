import React from 'react';
import CardLink from '../../UI/Card/CardLink/CardLink';
import Card from '../../UI/Card/Card';
import MSULogo from '../../Logo/Logos/MSULogo';

function EducationCard() {
  return (
    <Card title='Education' media={<MSULogo />}>
      <>
        <p className='text-color-gray'>
          I attented Missouri State University for a BS in CS and a minor in
          Mathematics
        </p>
        <CardLink to='/education'>Learn More</CardLink>
      </>
    </Card>
  );
}

export default EducationCard;
