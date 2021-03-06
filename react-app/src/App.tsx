import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Header from './components/Header';
import Anagram from './components/Anagram';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <Router>
      <Header />
      <div className="container my-3">
        <Switch>
          <Route path="/" exact component={HelloWorld} />
          <Route path="/anagram" exact component={Anagram} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
