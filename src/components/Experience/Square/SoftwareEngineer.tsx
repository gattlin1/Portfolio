import React from 'react';
import Card from '../../UI/Card/Card';
import Skill from '../../Skill/Skill';
import SquareLogo from '../../Logo/Logos/SquareLogo';

function SoftwareEng() {
  const skills = ['AWS Step Functions', 'AWS Lambda', 'Git'];

  return (
    <Card media={<SquareLogo />}>
      <>
        <p>
          <strong>September 2022 - Present</strong>
        </p>
        <div className='description text-color-gray'>
          <p>
            Software Engineer for the Payroll development team. I work on
            product the integration of external vendors to Square's products
          </p>
          <ul>
            <li>
              Implementing stories and bugs related to Square's Payroll product
            </li>
            <li>Sprint planning</li>
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
