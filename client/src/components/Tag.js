import React, { Component } from 'react';
import './Tag.css';

class Tag extends Component {
  render() {

    const tags = this.props.tags.reduce((acc, cur) => {
      return acc === '' ? cur : acc + ', ' + cur;
    }, '');

    return(
      <div className='Tag'>
        <p className='Tag__tags'> {tags} </p>
        <p className='Tag__time'> {this.props.time} </p>
      </div>
    );
  }
}

export default Tag;