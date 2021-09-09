import React, { useEffect } from 'react';
import MSUNameLogo from '../../components/Logo/MSUNameLogo/MSUNameLogo';

import './Education.scss';

function Education() {
  useEffect(() => {
    document.title = 'Gattlin Walker | Education';
  }, []);
  return (
    <div className='education'>
      <div className='school-logo-container'>
        <MSUNameLogo />
      </div>
    </div>
  );
}

export default Education;
