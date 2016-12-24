import React, { Component } from 'react';
import './App.css';

// Import components
import VideoLink from './components/VideoLink.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1> Video Hashes Generator </h1>
          <p> A React and Node Web Application </p>

          <VideoLink />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
