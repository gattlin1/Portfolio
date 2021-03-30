import React from 'react';

import About from './pages/About/About';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import Layout from './containers/Layout/Layout';
import Research from './pages/Research/Research';
import Resume from './pages/Resume/Resume';
import Links from './pages/Links/Links';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Switch>
          <Route path='/' exact component={About}></Route>
          <Route path='/research' component={Research}></Route>
          <Route path='/resume' component={Resume}></Route>
          <Route path='/links' component={Links}></Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
