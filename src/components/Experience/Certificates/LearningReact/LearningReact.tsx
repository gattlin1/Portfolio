import React from 'react';
import Card from '../../../UI/Card/Card';
import Skill from '../../../Skill/Skill';
import GitHubLogo from '../../../Logo/Logos/GitHubLogo';
import CardLink from '../../../UI/Card/CardLink/CardLink';

function LearningReact() {
  const skills = [
    'React',
    'Redux',
    'JavaScript',
    'TypeScript',
    'Unit Tests',
    'Git',
    'Axios',
    'NextJS',
    'CSS',
  ];

  return (
    <Card
      title='Learning React'
      media={<GitHubLogo url='https://github.com/gattlin1/Learning-React' />}
    >
      <>
        <p>
          <strong>Certificate</strong>
        </p>
        <div className='description text-color-gray'>
          <p>
            <a
              href='https://www.udemy.com/course/react-the-complete-guide-incl-redux/'
              target='_blank'
              rel='noreferrer'
            >
              Udemy Course
            </a>{' '}
            that offers 40+ hours of content over everything in React 16.
          </p>
          <ul>
            <li>
              Deep dive into components (props, state, class components,
              function components, hooks)
            </li>
            <li>
              Work with React libraries like React Router, Redux, and NextJS
            </li>
            <li>Handling server requests in React</li>
          </ul>
        </div>
        <ul className='skill-list'>
          {skills.map((skill, idx) => (
            <Skill key={idx}>{skill}</Skill>
          ))}
        </ul>
        <CardLink to='https://github.com/gattlin1/Learning-React' isExternal>
          View Code
        </CardLink>
        <CardLink
          to='https://github.com/gattlin1/Certificates/blob/master/React%20Certificate.pdf'
          isExternal
        >
          View Certificate
        </CardLink>
      </>
    </Card>
  );
}

export default LearningReact;
