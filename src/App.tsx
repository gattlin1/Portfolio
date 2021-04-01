import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './pages/About/About';
import Layout from './containers/Layout/Layout';
import Research from './pages/Research/Research';
import Resume from './pages/Resume/Resume';
import './App.scss';

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
