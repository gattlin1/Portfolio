import React from 'react';
import DuckCreekLogo from '../../Logo/DuckCreekLogo/DuckCreekLogo';
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
    <Card title='Associate Software Engineer' media={<DuckCreekLogo />}>
      <>
        <p>
          <strong>Duck Creek Technologies | May 2020 - Present</strong>
        </p>
        <div className='job-description'>
          <p>
            Lead developer for General Liability on the Commercial Lines
            Templates team
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
