import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MSUNameLogo from '../../components/Logo/MSUNameLogo/MSUNameLogo';
import Skill from '../../components/Skill/Skill';
import Card from '../../components/UI/Card/Card';

import './Education.scss';

function Education() {
  useEffect(() => {
    document.title = 'Gattlin Walker | Education';
  }, []);

  const courseList = [
    {
      title: ' Introduction to Software Engineering',
      courseCode: 'CSC 450',
      grade: 'A',
      description: (
        <p>
          Study of software engineering concepts that involve gatherint
          information, software design, testing and project management. All of
          these concepts are applied to the{' '}
          <Link to='/experience#MBv2'>Capstone Project</Link>
        </p>
      ),
      skills: ['Problem Solving', 'Agile', 'Kanban Boards', 'Version Control'],
    },
    {
      title: 'Data Mining',
      courseCode: 'CSC 535',
      grade: 'A',
      description: (
        <p>
          Introduction to the basic concepts of data mining including data
          preprocessing, classification, clustering and association rules
          mining. The focus will be on understanding the algorithms underlying
          data mining and on the practical use of those algorithms.
        </p>
      ),
      skills: [
        'Data Preprocessing',
        'Clustering',
        'NumPy',
        'Scikit-Learn',
        'Neural Networks',
      ],
    },
    {
      title: '',
      courseCode: '',
      grade: 'A',
      description: <p></p>,
      skills: [''],
    },
    {
      title: '',
      courseCode: '',
      grade: 'A',
      description: <p></p>,
      skills: [''],
    },
  ];
  return (
    <div className='education'>
      <div className='school-logo-container'>
        <MSUNameLogo />
      </div>
      <div className='courses'>
        {courseList.map(({ title, grade, description, skills }) => (
          <Card title={title}>
            <div className='description'>{description}</div>
            <div>Grade Received: {grade}</div>
            <ul className='skill-list'>
              {skills.map((skill, idx) => (
                <Skill key={idx}>{skill}</Skill>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Education;
