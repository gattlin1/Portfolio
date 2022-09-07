import React, { useEffect } from 'react';
import Tab, { TabInfo } from '../../components/UI/Tab/Tab';
import LearningReact from '../../components/Experience/Certificates/LearningReact/LearningReact';
import SrAscSoftwareEng from '../../components/Experience/DuckCreekTechnologies/SrAscSoftwareEng';
import AscSoftwareEng from '../../components/Experience/DuckCreekTechnologies/AscSoftwareEng';
import Intern from '../../components/Experience/DuckCreekTechnologies/Intern';
import PokeDex from '../../components/Experience/PersonalProjects/PokeDex';
import PortfolioSite from '../../components/Experience/PersonalProjects/PortfolioSite';
import CapstoneProject from '../../components/Experience/School/CapstoneProject';
import River from '../../components/Experience/PersonalProjects/River';
import './WorkExperience.scss';
import { useLocation } from 'react-router-dom';
import SoftwareEng from '../../components/Experience/Square/SoftwareEngineer';

function WorkExperience() {
  useEffect(() => {
    document.title = 'Gattlin Walker | Experience';
  }, []);
  const { hash } = useLocation();

  let defaultActiveProject = null;
  if (hash !== '') {
    defaultActiveProject = hash.substring(1);
  }

  const squareExperience: TabInfo = {
    softwareEng: { title: 'Software Engineer', description: <SoftwareEng /> },
  };

  const dctExperience: TabInfo = {
    srAscSoftwareEng: {
      title: 'Sr. Asc. Software Engineer',
      description: <SrAscSoftwareEng />,
    },
    ascSoftwareEng: {
      title: 'Asc. Software Engineer',
      description: <AscSoftwareEng />,
    },
    intern: {
      title: 'Engineering Intern',
      description: <Intern />,
    },
  };

  const projects: TabInfo = {
    portfolioSite: {
      title: 'Portfolio Site',
      description: <PortfolioSite />,
    },
    learningReact: {
      title: 'Learning React',
      description: <LearningReact />,
    },
    mbv2: {
      title: 'MBv2',
      description: <CapstoneProject />,
    },
    river: {
      title: 'River',
      description: <River />,
    },
    pokeDex: {
      title: 'Pokédex',
      description: <PokeDex />,
    },
  };

  return (
    <div className='experience'>
      <Tab title='Square' tabs={squareExperience}></Tab>
      <Tab
        title='Duck Creek Technologies'
        tabs={dctExperience}
        className='border-top'
      ></Tab>
      <Tab
        title='Projects'
        tabs={projects}
        defaultActiveTab={defaultActiveProject}
        className='border-top'
      ></Tab>
    </div>
  );
}

export default WorkExperience;
