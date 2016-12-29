import React, { Component } from 'react';
import './PlayerFilter.css';
import InputBox from './InputBox.js';

class PlayerFilter extends Component {
  render() {

    let rows = []; // array of components
    let time = 0;

    this.props.classes.forEach((classesForCurrentTime) => {

      // Search through all classes for each second and only includes this timestamp 
      classesForCurrentTime.some(classification => {
        if (classification.includes(this.props.filterClass)) {
          rows.push(
            <Tag 
            tags={classesForCurrentTime} 
            time={time}
            key={time}
          />);

          return true;
        }

        return false;
      });

      time++;

    });

    return(
      <div className='PlayerFilter'>
        <InputBox 
          placeholder={'Filter'}
          value={this.props.filterClass}
          onUserInput={this.props.onUserInput}
        />

        <div className='Timestamp'>
          {rows}
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