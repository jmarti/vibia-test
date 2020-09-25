import React from 'react';
import { Router, Redirect } from '@reach/router';
import Customize from 'views/pages/customize/customize.page';
import './App.scss';

function App() {
  return (
    <Router>
      <Redirect from="/" to="customize" noThrow />
      <Customize path="/customize" />
    </Router>
  );
}

export default App;
