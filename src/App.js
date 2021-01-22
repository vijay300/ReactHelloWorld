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
      <div className="app-main">
        <div className="main">
          <div>
            <h1>Hello {this.state.user} from Bridgelabz</h1>
            <img src={logo} onClick={this.onClick}
              alt="The Brodgelabz logo"/>
          </div>
          <div className="text-box">
            <input onChange={this.onNameChange}/>
            <span class="error-output">{this.state.nameError}</span>
          </div>
          <div>
            At BridgeLabz, we're a techie community of
          <ul>
              <li>Technologies</li>
              <li>Thinkers</li>
              <li>Builders</li>
          </ul>
            Working together to keep the Tech Employability of Engineers alive and accessible,
              so Tech Companies worldwide can get contributors and creators for Tehcnology Solutions.
              We believe this act of human collabration across an employability platform is essential
              to individual growth and our collective future.
          <br/>
          <br/>
              To Know about us, visit <a href="https://www.bridgeLabz.com">BridgeLabz</a> to learn even more about our mission i.e <strong>Employability to all</strong>.
          </div>
        </div>
      </div>
    );
  }
}

export default App;
