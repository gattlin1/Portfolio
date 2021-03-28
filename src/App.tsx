import React from 'react';

import Header from './components/Header/Header';
import About from './components/About/About';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Switch>
          <Route path='/' component={About}></Route>
          {/* <Route path='/research' component={}></Route>
            <Route path='/resume' component={}></Route> */}
        </Switch>
      </main>
    </div>
  );
}

export default App;
