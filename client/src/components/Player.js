import React, { Component } from 'react';
import './Player.css';
import PlayerFilter from './PlayerFilter.js';

class Player extends Component {

  constructor(props) {
    super(props);

    this.onUserClickTag = this.onUserClickTag.bind(this);
  }

  onUserClickTag(event) {
    console.log(event);
  }

  render() {
    return (
      <div className='Player'>
        <video 
          width='720' 
          height='480' 
          src={this.props.playingURL}
          ref={(videoDOM) => {this.videoDOM = videoDOM}}
          autoPlay>

          Your browser does not support HTML5 video.
        </video>

        <PlayerFilter
          value={this.props.value}
          onUserInput={this.props.onUserInput}

          onUserClickTag={this.onUserClickTag}
          videoDOM={this.videoDOM}
          tag={this.props.tag}
          filterClass={this.props.filterClass}
        />
      </div>
    );
  }
}

export default Player;