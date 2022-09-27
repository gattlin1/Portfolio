import React from 'react';
import Card from '../../UI/Card/Card';
import Skill from '../../Skill/Skill';
import SquareLogo from '../../Logo/Logos/SquareLogo';

function SoftwareEng() {
  const skills = [
    'AWS Step Functions',
    'AWS Lambda',
    'Ruby on Rails',
    'Terraform',
    'Kochiku',
    'Bash',
    'Git',
  ];

  return (
    <Card media={<SquareLogo />}>
      <>
        <p>
          <strong>September 2022 - Present</strong>
        </p>
        <div className='description text-color-gray'>
          <p>
            Software Engineer for the Payroll Tax Automation and Tooling team.
            We handle countless businesses that rely on us to file their taxes
          </p>
          <ul>
            <li>
              Implementing stories and bugs related to Square's Payroll product
            </li>
            <li>Integrating with external vendors</li>
            <li>Automating tax filings</li>
            <li>
              Handling internal and external questions related to the team's
              products
            </li>
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

export default SoftwareEng;
