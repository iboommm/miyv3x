import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router'
import logo from './img/logo.png';
import './App.css';
import { Button,Jumbotron } from 'react-bootstrap';
import * as Icons from 'react-icons/lib/fa'

class App extends Component {
  constructor(props) {
    super(props);
  }


  goFacebook(e) {
    window.location = 'https://www.facebook.com/iboommm';
  }

  goTwitter(e) {
    window.location = 'https://www.facebook.com/iboommm';
  }


  render() {
    return (
      <div className="App container-fluid">
      <Jumbotron>
        <h1>Emergency Maintenance</h1>
        <p>I'm ready for React! <br />Coming Soon.</p>
        <p>
          <Button bsStyle="default" onClick={this.goFacebook}> <Icons.FaFacebookOfficial /> Facebook</Button>
          &nbsp;
          <Button bsStyle="default" onClick={this.goTwitter}> <Icons.FaTwitter /> Twitter</Button>
        </p>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
