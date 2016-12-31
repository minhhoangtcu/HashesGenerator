import React, { Component } from 'react';
import './Player.css';
import PlayerFilter from './PlayerFilter.js';

class Player extends Component {

  constructor(props) {
    super(props);

    this.onClickTag = this.onClickTag.bind(this);
    this.changeHeight = this.changeHeight.bind(this);
  }

  changeHeight() {
    // Change the height of the filter to be equal to the max height, 380px, of the video.
    this.playerDOM.style.height = (this.videoDOM.videoHeight > 380 ? 380 : this.videoDOM.videoHeight) + 'px';
  }

  // Whenever user click a tag in the filter
  onClickTag(time) {
    this.videoDOM.currentTime = time;
    this.videoDOM.play();
  }

  render() {
    return (
      <div className='Player' ref={playerDOM => this.playerDOM = playerDOM}>
        <video 
          src={this.props.playingURL}
          ref={(videoDOM) => {this.videoDOM = videoDOM}}
          onCanPlay={this.changeHeight}
          autoPlay
          muted
        >

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