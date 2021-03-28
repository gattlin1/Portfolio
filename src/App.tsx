import React from 'react';

import About from './components/About/About';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import Layout from './containers/Layout/Layout';
import Research from './components/Research/Research';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Switch>
          <Route path='/' exact component={About}></Route>
          <Route path='/research' component={Research}></Route>
          <Route path='/resume' component={Resume}></Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
