import React, { Component } from 'react';
import './Player.css';
import PlayerFilter from './PlayerFilter.js';

class Player extends Component {

  render() {
    return (
      <div className='Player'>
        <video width='720' height='480' src={this.props.playingURL} autoPlay>
          Your browser does not support HTML5 video.
        </video>

        <PlayerFilter
          value={this.props.value}
          onUserInput={this.props.onUserInput}

          classes={this.props.classes}
          filterClass={this.props.filterClass}
        />
      </div>
    );
  }
}

export default Player;