import React, { useEffect } from 'react';

function Education() {
  useEffect(() => {
    document.title = 'Gattlin Walker | Education';
  }, []);
  return <div className='education'></div>;
}

export default Education;
