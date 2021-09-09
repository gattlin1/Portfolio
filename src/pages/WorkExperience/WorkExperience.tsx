import React, { useEffect } from 'react';
import AscSoftwareEng from '../../components/Experience/DuckCreekTechnologies/AscSoftwareEng/AscSoftwareEng';
import Intern from '../../components/Experience/DuckCreekTechnologies/Intern/Intern';
import PokeDex from '../../components/Experience/PersonalProjects/PokeDex/PokeDex';
import CapstoneProject from '../../components/Experience/School/CapstoneProject/CapstoneProject';

import './WorkExperience.scss';

function WorkExperience() {
  useEffect(() => {
    document.title = 'Gattlin Walker | Experience';
  }, []);

  return (
    <div className='experience'>
      <AscSoftwareEng />
      <CapstoneProject />
      <PokeDex />
      <Intern />
    </div>
  );
}

export default WorkExperience;
