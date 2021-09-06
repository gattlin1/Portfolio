import React from 'react';

import './Skill.scss';

interface SkillProp {
  children: string;
}

function Skill({ children }: SkillProp) {
  return <li className='skill'>{children}</li>;
}

export default Skill;
