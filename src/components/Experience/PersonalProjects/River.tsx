import React from 'react';
import Card from '../../UI/Card/Card';
import Skill from '../../Skill/Skill';
import GitHubLogo from '../../Logo/Logos/GitHubLogo';
import CardLink from '../../UI/Card/CardLink/CardLink';

function River() {
  const skills = ['Rust', 'Bitwise Operations', 'Git', 'Unit Tests'];

  return (
    <Card
      title='River'
      id='River'
      media={<GitHubLogo url='https://github.com/gattlin1/River' />}
    >
      <>
        <p>
          <strong>Personal Project</strong>
        </p>
        <div className='description text-color-gray'>
          <p>
            Chess engine written in Rust. River uses a bitboard representation
            to help with speed and efficiency.
          </p>
          <ul></ul>
        </div>
        <ul className='skill-list'>
          {skills.map((skill, idx) => (
            <Skill key={idx}>{skill}</Skill>
          ))}
        </ul>
        <CardLink to='https://github.com/gattlin1/River' isExternal>
          View Code
        </CardLink>
      </>
    </Card>
  );
}

export default River;
