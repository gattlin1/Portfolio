import React from 'react';
import DuckCreekLogo from '../../../Navigation/NavCards/WorkExperienceCard/DuckCreekLogo/DuckCreekLogo';
import Card from '../../../UI/Card/Card';
import Skill from '../../../Skill/Skill';

import './AscSoftwareEng.scss';

function AscSoftwareEng() {
  const skills = [
    'C#',
    'SVN',
    'Git',
    'HTML',
    'CSS',
    'Azure DevOps',
    'Bash',
    'Team City',
  ];

  return (
    <Card title='Associate Software Engineer' media={<DuckCreekLogo />}>
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

export default AscSoftwareEng;
