import React from 'react';
import DuckCreekLogo from '../../Logo/Logos/DuckCreekLogo';
import Card from '../../UI/Card/Card';
import Skill from '../../Skill/Skill';

function Intern() {
  const skills = [
    'SVN',
    'Git',
    'Azure DevOps',
    'Bash',
    'Team City',
    'Angular',
    'Selenium',
    'CodedUI',
    'Postman',
  ];

  return (
    <Card title='Engineering Intern' media={<DuckCreekLogo />}>
      <>
        <p>
          <strong>Duck Creek Technologies | Jun 2018 – Apr 2020</strong>
        </p>
        <div className='description text-color-gray'>
          <p>
            Tested features for Duck Creek's Platform team and managed E2E
            testing suite
          </p>
          <ul>
            <li>Black Box Testing</li>
            <li>White Box Testing</li>
            <li>Creating and Maintaining automated test scripts</li>
            <li>API Endpoint Testing</li>
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

export default Intern;
