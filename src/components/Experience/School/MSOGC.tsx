import React from 'react';
import MSULogo from '../../Logo/MSULogo/MSULogo';
import Card from '../../UI/Card/Card';
import Skill from '../../Skill/Skill';

function MSOGC() {
  const skills = [
    'Python',
    'Tensorflow',
    'Keras',
    'TensorBoard',
    'NumPy',
    'Parallel Programming',
    'Git',
    'Bash',
  ];

  return (
    <Card title='Missouri Space Grant Consortium' media={<MSULogo />}>
      <>
        <p>
          <strong>Missouri State University | Oct 2019 - Mar 2020</strong>
        </p>
        <div className='job-description'>
          <p>
            Conducted research on NASA's FTIR ECOSTRESS database including
            spectral annotation and classification
          </p>
          <ul>
            <li>
              Developed CNN models using TensorFlow for spectra classification
            </li>
            <li>Developed CNN models for determining spectral similarity</li>
            <li>
              Annotated spectral similarity using statistical similarity
              algorithms (Pearson Correlation Coefficient, Mean Squared
              Distance, Mean Average Distance, Cosine Similarity)
            </li>
          </ul>
        </div>
        <ul className='skill-list'>
          {skills.map((skill, idx) => (
            <Skill key={idx}>{skill}</Skill>
          ))}
        </ul>
      </>
    </Card>
  );
}

export default MSOGC;
