import React, { Component } from 'react';
import './Tag.css';

class Tag extends Component {
  render() {

    // const tags = this.props.tags.reduce((acc, cur) => {
    //   return acc === '' ? cur : acc + ', ' + cur;
    // }, '');

    return(
      <div className='Tag'>
        <p className='Tag__tags'> {this.props.tag} </p>
        <p className='Tag__prob'> {(this.props.prob * 100) + '%'} </p>
        <p className='Tag__time'> {this.props.time} </p>
      </div>
    );
  }
}

export default Tag;