import React, { Component } from 'react';
import './Player.css';
import PlayerFilter from './PlayerFilter.js';

class Player extends Component {

  render() {
    return (
      <div className='Player'>
        <video width='400'>
          <source src='http://www.w3schools.com/html/mov_bbb.mp4' type='video/mp4' />
          Your browser does not support HTML5 video.
        </video>

        <PlayerFilter />
      </div>
    );
  }
}

export default Player;