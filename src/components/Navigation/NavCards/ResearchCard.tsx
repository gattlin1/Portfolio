import React from 'react';
import CardLink from '../../UI/Card/CardLink/CardLink';
import Card from '../../UI/Card/Card';
import MSULogo from '../../Logo/Logos/MSULogo';

function ResearchCard() {
  return (
    <Card title='Research' media={<MSULogo />}>
      <>
        <p className='text-color-gray'>
          Spectral Analysis through statistical correlation algorithms and CNNs
        </p>
        <CardLink to='/research'>Learn More</CardLink>
      </>
    </Card>
  );
}

export default ResearchCard;
