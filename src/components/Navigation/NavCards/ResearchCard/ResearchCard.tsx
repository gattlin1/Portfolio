import React from 'react';
import Button from '../../../UI/Button/Button';
import Card from '../../../UI/Card/Card';
import MSULogo from './MSULogo/MSULogo';

const ResearchCard = () => {
  return (
    <Card title='Research' link='/research' media={<MSULogo />}>
      <>
        <p>
          Spectral Analysis through statistical correlation algorithms and CNNs.
        </p>
        <Button to='/research'>Learn More...</Button>
      </>
    </Card>
  );
};

export default ResearchCard;
