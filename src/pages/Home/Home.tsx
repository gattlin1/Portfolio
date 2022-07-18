import React, { useEffect } from 'react';
import './Home.scss';

function Home() {
  useEffect(() => {
    document.title = 'Gattlin Walker | Home';
  });

  return (
    <div className='home'>
      <h2>Hi! I'm Gattlin Walker</h2>
      <h1>I'm a software engineer</h1>
      <div>Get to know a little about me by following the link below</div>
    </div>
  );
}

export default Home;
