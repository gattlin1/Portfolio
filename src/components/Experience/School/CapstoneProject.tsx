import React from 'react';
import Card from '../../UI/Card/Card';
import Skill from '../../Skill/Skill';
import GitHubLogo from '../../Logo/Logos/GitHubLogo';
import CardLink from '../../UI/Card/CardLink/CardLink';

function CapstoneProject() {
  const skills = [
    'Python',
    'OpenCV',
    'Flask',
    'NumPy',
    'Parallel Programming',
    'Git',
    'Bash',
    'JavaScript',
    'JQuery',
  ];

  return (
    <Card
      id='MBv2'
      media={<GitHubLogo url='https://github.com/gattlin1/MBv2' />}
    >
      <>
        <p>
          <strong>Capstone Project</strong>
        </p>
        <div className='description text-color-gray'>
          <p>
            A web application that provides an automated approach to detecting
            protein beads in images and gathers color intensities to then be
            analyzed. The information gathered is used to aid in disease
            detection research.
          </p>
          <ul>
            <li>Developed crushed bead detection</li>
            <li>Enhanced UI</li>
            <li>Enhanced bead color detection</li>
          </ul>
        </div>
        <ul className='skill-list'>
          {skills.map((skill, idx) => (
            <Skill key={idx}>{skill}</Skill>
          ))}
        </ul>
        <CardLink to='https://github.com/gattlin1/MBv2' isExternal>
          View Code
        </CardLink>
      </>
    </Card>
  );
}

export default CapstoneProject;
