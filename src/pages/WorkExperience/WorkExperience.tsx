import React, { useEffect } from 'react';
import Tab from '../../components/UI/Tab/Tab';
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

  const dctExperience: {
    [tab: string]: { title: string; description: JSX.Element | JSX.Element[] };
  } = {
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

  const projects: {
    [tab: string]: { title: string; description: JSX.Element | JSX.Element[] };
  } = {
    portfolioSite: {
      title: 'Portfolio Site',
      description: <PortfolioSite />,
    },
    learningReact: {
      title: 'Learning React',
      description: <LearningReact />,
    },
    capstoneProject: {
      title: 'Microbeads v2',
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
      <Tab title='Duck Creek Technologies' tabs={dctExperience}></Tab>
      <Tab title='Projects' tabs={projects} className='border-top'></Tab>
    </div>
  );
}

export default WorkExperience;
