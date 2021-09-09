import React from 'react';
import Card from '../../../UI/Card/Card';
import Skill from '../../../Skill/Skill';
import GitHubLogo from '../../../Logo/GitHubLogo/GitHubLogo';
import CardLink from '../../../UI/Card/CardLink/CardLink';

function PokeDex() {
  const skills = [
    'Angular 10',
    'TypeScript',
    'CI/CD',
    'Unit Tests',
    'Jasmine',
    'Git',
    'Google Fonts',
    'Fontawesome',
    'RxJS',
  ];

  return (
    <Card
      title='Pokédex'
      media={<GitHubLogo url='https://github.com/gattlin1/PokeDex' />}
    >
      <>
        <p>
          <strong>Personal Project</strong>
        </p>
        <div className='job-description'>
          <p>
            Angular web application that utilizes the PokéAPI to fetch and then
            display Pokémon.
          </p>
          <ul>
            <li>Utilizes RxJS observables to dynamically fetch data</li>
            <li>Uses services and custom pipes.</li>
          </ul>
        </div>
        <ul className='skill-list'>
          {skills.map((skill, idx) => (
            <Skill key={idx}>{skill}</Skill>
          ))}
        </ul>
        <CardLink to='https://github.com/gattlin1/PokeDex' isExternal>
          View Code
        </CardLink>
      </>
    </Card>
  );
}

export default PokeDex;
