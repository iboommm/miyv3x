import React, { Component } from 'react';
import './App.css';
import { Image,Button,Jumbotron } from 'react-bootstrap';
import * as Icons from 'react-icons/lib/fa'

class App extends Component {


  goFacebook(e) {
    window.location = 'https://www.facebook.com/iboommm';
  }

  goTwitter(e) {
    window.location = 'https://twitter.com/iboommm_';
  }

 
  render() {
    return (
      <div className="App container-fluid">
      <Jumbotron style={{ textAlign:'center'}}>
      <Image src={require ("./img/logo.png")} thumbnail />
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
