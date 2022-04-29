import React from 'react';
import MSULogo from '../../Logo/Logos/MSULogo';
import Card from '../../UI/Card/Card';
import Skill from '../../Skill/Skill';

function MOSGC() {
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
    <Card
      style={{ borderRadius: '5px 5px 0 0' }}
      title='Missouri Space Grant Consortium'
      media={<MSULogo />}
    >
      <>
        <p>
          <strong>Missouri State University | Oct 2019 - Mar 2020</strong>
        </p>
        <div className='description text-color-gray'>
          <p>
            MOSGC is a research scholarship given to select Missouri State
            University students based on faculty recommendation. During my
            senior year when I was in my capstone project, my professor
            approached me and encouraged me to apply for it with his and two
            other professor recommendations. After applying and receiving the
            grant, I began my research the next semester. Recipients are
            responsible for conducting a research project on NASA's ECOSTRESS
            data set. My research involved annotating spectra using statistical
            similarity algorithms, and also classification by extracting
            spectral features using convolutional neural networks.
          </p>
          <ul>
            <li>
              Developed CNN models using TensorFlow for spectra classification
              and determining spectral similarity
            </li>
            <li>
              Annotated spectral similarity using statistical similarity
              algorithms
            </li>
            <li>
              Analyzing and extracting deterministic features from FTIR datasets
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

export default MOSGC;
