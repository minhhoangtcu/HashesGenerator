import React, { Component } from 'react';
import './PlayerFilter.css';
import InputBox from './InputBox.js';

class PlayerFilter extends Component {
  render() {
    return(
      <div className='PlayerFilter'>
        <InputBox placeholder={'Filter'}/>

        <div className='Timestamp'>
          <Tag tags={['human', 'shit', 'son']} time='00:00:01'/>
          <Tag tags={['human2', 'shit', 'son']} time='00:00:01'/>
        </div>
      </div>
    );
  }
}

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

export default PlayerFilter;