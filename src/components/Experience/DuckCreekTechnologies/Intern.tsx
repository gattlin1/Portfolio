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
    <Card media={<DuckCreekLogo />}>
      <>
        <p>
          <strong>June 2018 – April 2020</strong>
        </p>
        <div className='description text-color-gray'>
          <p>
            Tested features for Duck Creek's Platform team and managed E2E
            testing suite. Originally I was tasked with creating automated tests
            for the entire suite of Duck Creek products using CodedUI. After
            completing that task I was placed on the Platform team where I was a
            QA developer.
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
