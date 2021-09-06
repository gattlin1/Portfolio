import React from 'react';
import DuckCreekLogo from '../../../Navigation/NavCards/WorkExperienceCard/DuckCreekLogo/DuckCreekLogo';
import Card from '../../../UI/Card/Card';
import Skill from '../../../Skill/Skill';

function Intern() {
  const skills = [
    'C#',
    'SVN',
    'Git',
    'HTML',
    'CSS',
    'Azure DevOps',
    'Bash',
    'Team City',
    'Angular',
    'Black Box Testing',
    'White Box Testing',
  ];

  return (
    <Card title='Engineering Intern' media={<DuckCreekLogo />}>
      <>
        <p>Duck Creek Technologies</p>
        <ul className='skill-list'>
          {skills.map((skill, idx) => (
            <Skill key={idx}>{skill}</Skill>
          ))}
        </ul>
      </>
    </Card>
  );
}

export default Intern;
