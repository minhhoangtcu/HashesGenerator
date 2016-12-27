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
      filterClass: '',
      classes: [],
    };

    this.onUserURLInput = this.onUserURLInput.bind(this);
    this.analyzeVideo = this.analyzeVideo.bind(this);
  }

  // Whenever user changes data in the url field, we change our state
  onUserURLInput(event) {
    this.setState({
      urlInput: event.target.value,
    });
  }

  // Whenever we click the button, send request to server
  analyzeVideo() {

    fetch(`${END_POINT}?url=${this.state.urlInput}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Server error!');
        }

        return res.json();

      }).then(json => {
        this.setState({
          classes: json,
        });

      }).catch(err => {
        // TODO: Handle this in the UI
        console.error(err);
      });

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1> Video Hashes Generator </h1>
          <p> A React and Node Web Application </p>

          <VideoLink
            onUserInput={this.onUserURLInput}
            analyzeVideo={this.analyzeVideo}
          />
        </div>

        <Player 
          classes={this.state.classes}
          filterClass={this.state.filterClass}
        />
      </div>
    );
  }
}

export default App;
