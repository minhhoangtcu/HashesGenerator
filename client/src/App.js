import React, { Component } from 'react';
import './App.css';

// Import components
import VideoLink from './components/VideoLink.js';
import Player from './components/Player.js';

const END_POINT = 'https://thawing-hollows-63878.herokuapp.com/analyze';

// https://github.com/minhhoangtcu/minhhoangtcu.github.io/raw/master/video/John%20Lewis%20-%20The%20Long%20Wait-HD.mp4
// http://www.w3schools.com/html/mov_bbb.mp4

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      urlInput: '',
      playingURL: 'http://www.w3schools.com/html/mov_bbb.mp4', // set as default
      filterClass: '',
      tag: [],
    };

    this.onUserURLInput = this.onUserURLInput.bind(this);
    this.onUserFilterInput = this.onUserFilterInput.bind(this);
    
    this.analyzeVideo = this.analyzeVideo.bind(this);
  }

  // Whenever user changes data in the url field, we change our state
  onUserURLInput(event) {
    this.setState({
      urlInput: event.target.value,
    });
  }

  // Whenever user changes data in the filter field, we change our state
  onUserFilterInput(event) {
    this.setState({
      filterClass: event.target.value,
    });
  }

  // Whenever we click the button, send request to server
  analyzeVideo() {

    const url = this.state.urlInput;

    fetch(`${END_POINT}?url=${url}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Server error!');
        }

        return res.json();

      }).then(json => {
        // TODO: Tell the user about the process
        this.setState({
          tag: json,
          playingURL: url,
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
            // Input Box
            value={this.state.urlInput}
            onUserInput={this.onUserURLInput}

            // Button
            analyzeVideo={this.analyzeVideo}
          />
        </div>

        <Player 
          // PlayerFilter
          tag={this.state.tag}
          playingURL={this.state.playingURL}

          // InputBox
          filterClass={this.state.filterClass}
          onUserInput={this.onUserFilterInput}
        />
      </div>
    );
  }
}

export default App;
