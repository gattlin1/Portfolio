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
    <Card media={<DuckCreekLogo />}>
      <>
        <p>
          <strong>November 2021 - September 2022</strong>
        </p>
        <div className='description text-color-gray'>
          <p>
            Lead developer for General Liability on the Commercial Lines
            Templates team. I am responsible for all major updates to the line
            and assist other lines when needed. Other responsibilities include
            maintaining tools used by the team to improve productivity. One such
            tool is a winforms application for class code that allows somebody
            to modify, add, and delete items. A process that was originally done
            by manually editing the xml files and prone to errors.
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
