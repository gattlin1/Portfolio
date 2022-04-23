import React from 'react';
import DuckCreekLogo from '../../Logo/Logos/DuckCreekLogo';
import Card from '../../UI/Card/Card';
import Skill from '../../Skill/Skill';

function SrAscSoftwareEng() {
  const skills = [
    'C#',
    'SVN',
    'Git',
    'HTML',
    'CSS',
    'Azure DevOps',
    'Bash',
    'Team City',
    'Author',
    'Server',
    'Express',
  ];

  return (
    <Card title='Senior Associate Software Engineer' media={<DuckCreekLogo />}>
      <>
        <p>
          <strong>Duck Creek Technologies | Nov 2021 - Present</strong>
        </p>
        <div className='description text-color-gray'>
          <p>
            Lead developer for General Liability on the Commercial Lines
            Templates team
          </p>
          <ul>
            <li>
              Integrating major updates to the General Liability line of
              business
            </li>
            <li>Developing monthly circulars, bugs, and tasks</li>
            <li>Developing tools for internal use</li>
            <li>Apprenticing new hires and interns</li>
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

export default SrAscSoftwareEng;
