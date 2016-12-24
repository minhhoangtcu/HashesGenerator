import React, { Component } from 'react';
import './VideoLink.css';

class VideoLink extends Component {

  render() {
    return (
      <form className='Form'>
        <input type='text' placeholder='Please paste a link to your desired video here' className='Input Input__textfield'/>
        <input type='button' value='Search' className='Input Input__button'/>
      </form>
    );
  }
}

export default VideoLink;