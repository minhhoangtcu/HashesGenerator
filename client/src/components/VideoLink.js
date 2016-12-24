import React, { Component } from 'react';
import './VideoLink.css';
import InputBox from './InputBox.js';

class VideoLink extends Component {

  render() {
    return (
      <form className='Form'>
        <InputBox />
        <input type='button' value='Search' className='Input Input__button'/>
      </form>
    );
  }
}

export default VideoLink;