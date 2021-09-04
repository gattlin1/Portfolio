import React from 'react';
import Card from '../UI/Card/Card';
import DuckCreekLogo from './DuckCreekLogo/DuckCreekLogo';

const WorkExperience = () => {
  return (
    <Card title='Work Experience' media={<DuckCreekLogo />} link='/experience'>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
      </p>
    </Card>
  );
};

export default WorkExperience;
