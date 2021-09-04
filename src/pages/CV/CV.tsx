import React, { useEffect } from 'react';

import './CV.scss';

function Resume() {
  useEffect(() => {
    document.title = 'Gattlin Walker | CV';
  });
  return (
    <div className='cv'>
      <div className='heading'>
        <h3>Gattlin L. Walker</h3>
        <div>Last updated: Apr 2021</div>
        <a href='/'>Download CV as PDF</a>
      </div>
      <hr />
      <div className='info'>
        <div>
          <div>Duck Creek Technologies</div>
          <div>Assoc. Software Engineer</div>
          <div>gattlin28@gmail.com</div>
        </div>
      </div>
      <hr />
      <div className='navigation'>
        <h3>Navigation</h3>
        <ul>
          <li>
            <a href='#professional-experience'>Professional Experience</a>
          </li>
          <li>
            <a href='#education'>Education</a>
          </li>
          <li>
            <a href='#awards'>Awards, Honors, & Certificates</a>
          </li>
          <li>
            <a href='#publications'>Publications</a>
          </li>
          <li>
            <a href='#software-contributions'>Software Contributions</a>
          </li>
        </ul>
      </div>
      <hr />
      <div className='professional-experience'></div>
    </div>
  );
}

export default Resume;
