import React, { useEffect } from 'react';
import LearningReact from '../../components/Experience/Certificates/LearningReact/LearningReact';
import SrAscSoftwareEng from '../../components/Experience/DuckCreekTechnologies/SrAscSoftwareEng';
import AscSoftwareEng from '../../components/Experience/DuckCreekTechnologies/AscSoftwareEng';
import Intern from '../../components/Experience/DuckCreekTechnologies/Intern';
import PokeDex from '../../components/Experience/PersonalProjects/PokeDex';
import PortfolioSite from '../../components/Experience/PersonalProjects/PortfolioSite';
import CapstoneProject from '../../components/Experience/School/CapstoneProject';
import River from '../../components/Experience/PersonalProjects/River';
import './WorkExperience.scss';

function WorkExperience() {
  useEffect(() => {
    document.title = 'Gattlin Walker | Experience';
  }, []);

  return (
    <div className='experience'>
      <div className='experience-items'>
        <SrAscSoftwareEng />
        <AscSoftwareEng />
        <CapstoneProject />
        <PortfolioSite />
        <LearningReact />
        <River />
        <PokeDex />
        <Intern />
      </div>
    </div>
  );
}

export default WorkExperience;
