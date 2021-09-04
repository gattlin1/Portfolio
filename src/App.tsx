import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './pages/About/About';
import Layout from './containers/Layout/Layout';
import Research from './pages/Research/Research';
import CV from './pages/CV/CV';
import WorkExperience from './pages/WorkExperience/WorkExperience';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Switch>
          <Route path='/' exact component={About}></Route>
          <Route path='/research' component={Research}></Route>
          <Route path='/cv' component={CV}></Route>
          <Route path='/experience' component={WorkExperience}></Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
