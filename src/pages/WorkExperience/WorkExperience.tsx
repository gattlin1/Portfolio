import React, { useEffect } from 'react';
import AscSoftwareEng from '../../components/Experience/DuckCreekTechnologies/AscSoftwareEng/AscSoftwareEng';
import Intern from '../../components/Experience/DuckCreekTechnologies/Intern/Intern';

import './WorkExperience.scss';

function WorkExperience() {
  useEffect(() => {
    document.title = 'Gattlin Walker | Experience';
  }, []);

  return (
    <div className='experience'>
      <AscSoftwareEng />
      <Intern />
    </div>
  );
}

export default WorkExperience;
