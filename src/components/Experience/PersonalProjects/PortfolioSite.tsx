import React from 'react';
import Card from '../../UI/Card/Card';
import Skill from '../../Skill/Skill';
import GitHubLogo from '../../Logo/GitHubLogo/GitHubLogo';
import CardLink from '../../UI/Card/CardLink/CardLink';

function PortfolioSite() {
  const skills = [
    'React',
    'TypeScript',
    'React Router',
    'CSS Grid/Flexbox',
    'Unit Tests',
    'Git',
    'Axios',
  ];

  return (
    <Card
      title='Portfolio Site'
      media={<GitHubLogo url='https://github.com/gattlin1/Portfolio' />}
    >
      <>
        <p>
          <strong>Personal Project</strong>
        </p>
        <div className='description'>
          <p>My personal portfolio site that I created using React</p>
          <ul>
            <li>Utilizes robust components for reusability and ease of use</li>
            <li>Custom CSS styling and design</li>
          </ul>
        </div>
        <ul className='skill-list'>
          {skills.map((skill, idx) => (
            <Skill key={idx}>{skill}</Skill>
          ))}
        </ul>
        <CardLink to='https://github.com/gattlin1/Portfolio' isExternal>
          View Code
        </CardLink>
      </>
    </Card>
  );
}

export default PortfolioSite;
