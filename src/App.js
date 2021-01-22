import React from 'react';
import './App.css';
import logo from '../src/assets/images/Logo.svg';

class App extends React.Component {

  url = 'https://www.bridgelabz.com/'
  constructor() {
    super()
    this.state = {
      title: 'Hello from Bridgelabz'
    }
  }

  onClick = (event) => {
    console.log("image is clicked!", event);
    window.open(this.url, "blank");
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} onClick={this.onClick}
          alt="The Brodgelabz logo"/>
      </div>
    );
  }
}

export default App;
