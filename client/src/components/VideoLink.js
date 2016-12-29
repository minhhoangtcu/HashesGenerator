import React, { Component } from 'react';
import './VideoLink.css';
import InputBox from './InputBox.js';

class VideoLink extends Component {

  render() {
    return (
      <form className='Form'>
        <InputBox 
          placeholder={'Please paste a link to your desired video here'}
          value={this.props.value}
          onUserInput={this.props.onUserInput}
        />

        <input 
          type='button' 
          value='Search' 
          className='Input Input__button'
          onClick={this.props.analyzeVideo}
        />

      </form>
    );
  }
}

export default VideoLink;