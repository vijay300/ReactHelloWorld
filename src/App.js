import React from 'react';
import './App.css';
import Home from '../src/components/home/home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render () {
    return (
      <div className="app-main">
        <Router>
          <switch>
            <Route path="">
              <Home />
            </Route>
          </switch>
        </Router>
      </div>
    );
  }
}

export default App;
