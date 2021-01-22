import React from 'react';
import './App.css';
import logo from '../src/assets/images/Logo.svg';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      title: 'Hello from Bridgelabz'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} alt="The Brodgelabz logo"/>
      </div>
    );
  }
}

export default App;
