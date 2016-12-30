import React, { Component } from 'react';
import './Tag.css';

class Tag extends Component {

  constructor(props) {
    super(props);

    this.playVideo = this.playVideo.bind(this);
  }

  playVideo() {
    this.props.onClick(this.props.time);
  }

  render() {

    // const tags = this.props.tags.reduce((acc, cur) => {
    //   return acc === '' ? cur : acc + ', ' + cur;
    // }, '');

    return(
      <div className='Tag' onClick={this.playVideo}>
        <p className='Tag__tags'> {this.props.tag} </p>
        <p className='Tag__prob'> {(this.props.prob * 100).toFixed(2) + '%'} </p>
        <p className='Tag__time'> {this.props.time} </p>
      </div>
    );
  }
}

export default Tag;