import React, { Component } from 'react';
import './App.css';

// Import components
import VideoLink from './components/VideoLink.js';
import Player from './components/Player.js';

const END_POINT = 'http://localhost:3000/analyze'; 

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      urlInput: '',
      classes: [],
    };

    this.onUserInput = this.onUserInput.bind(this);
    this.analyzeVideo = this.analyzeVideo.bind(this);
  }

  // Whenever user changes data in the url field, we change our state
  onUserInput(urlInput) {
    this.setState({
      urlInput: urlInput,
    });
  }

  // Whenever we click the button, send request to server
  analyzeVideo() {

    const url = 'http://www.w3schools.com/html/mov_bbb.mp4';

    fetch(`${END_POINT}?url=${url}`)
      .then(res => {
        console.log(res.json());
      });

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1> Video Hashes Generator </h1>
          <p> A React and Node Web Application </p>

          <VideoLink
            onUserInput={this.onUserInput}
            analyzeVideo={this.analyzeVideo}
          />
        </div>

        <Player 
          classes={this.state.classes}
        />
      </div>
    );
  }
}

export default App;
