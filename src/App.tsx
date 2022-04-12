import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import About from './pages/About/About';
import Layout from './containers/Layout/Layout';
import Research from './pages/Research/Research';
import WorkExperience from './pages/WorkExperience/WorkExperience';
import Education from './pages/Education/Education';

import './App.scss';

function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, [pathname, hash]);

  return (
    <div className='App'>
      <Layout>
        <Switch>
          <Route path='/' exact component={About}></Route>
          <Route path='/experience' component={WorkExperience}></Route>
          <Route path='/education' component={Education}></Route>
          <Route path='/research' component={Research}></Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
