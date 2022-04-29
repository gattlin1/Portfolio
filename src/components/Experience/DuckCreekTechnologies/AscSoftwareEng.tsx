import React from 'react';
import DuckCreekLogo from '../../Logo/Logos/DuckCreekLogo';
import Card from '../../UI/Card/Card';
import Skill from '../../Skill/Skill';

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
    'Author',
    'Server',
    'Express',
  ];

  return (
    <Card media={<DuckCreekLogo />}>
      <>
        <p>
          <strong>May 2020 - November 2021</strong>
        </p>
        <div className='description text-color-gray'>
          <p>
            Lead developer for General Liability on the Commercial Lines
            Templates team.
          </p>
          <ul>
            <li>Developing monthly circulars, bugs, and tasks</li>
            <li>Responding to customer questions</li>
            <li>Apprenticing new hires and interns</li>
            <li>Styling webpages</li>
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

export default AscSoftwareEng;
