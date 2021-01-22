import React from 'react';
import './App.css';
import logo from '../src/assets/images/Logo.svg';

class App extends React.Component {

  url = 'https://www.bridgelabz.com/'
  constructor() {
    super()
    this.state = {
      user: '',
      nameError:''
    }
  }

  onClick = (event) => {
    console.log("image is clicked!", event);
    window.open(this.url, "blank");
  }

  onNameChange = (event) => {
    console.log("value is: ", event.target.value);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    this.setState({user: event.target.value})
    if(nameRegex.test(event.target.value)) {
      this.setState({nameError: ''})
    } else {
      this.setState({nameError: 'Name is Incorrect'})
    }
  }

  render() {
    return (
      <div>
        <div>
          <h1>Helo {this.state.user} from Bridgelabz</h1>
          <img src={logo} onClick={this.onClick}
            alt="The Brodgelabz logo"/>
        </div>
        <div>
          <input onChange={this.onNameChange}/>
          <span class="error-output">{this.state.nameError}</span>
        </div>
      </div>
    );
  }
}

export default App;
