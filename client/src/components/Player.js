import React, { Component } from 'react';
import './Player.css';
import PlayerFilter from './PlayerFilter.js';

class Player extends Component {

  constructor(props) {
    super(props);

    this.onClickTag = this.onClickTag.bind(this);
  }

  // Whenever user click a tag in the filter
  onClickTag(time) {
    this.videoDOM.currentTime = time;
    this.videoDOM.play();
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

          onClick={this.onClickTag}
          videoDOM={this.videoDOM} // TODO: dynamically resize filter section

          tag={this.props.tag}
          filterClass={this.props.filterClass}
        />
      </div>
    );
  }
}

export default Player;