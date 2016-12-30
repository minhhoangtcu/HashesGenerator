import React, { Component } from 'react';
import './PlayerFilter.css';
import InputBox from './InputBox.js';
import Tag from './Tag';

class PlayerFilter extends Component {

  render() {

    let rows = []; // array of components
    let time = 0;

    if (this.props.tag !== undefined && this.props.tag.classes !== undefined) {

      this.props.tag.classes.forEach((classesForCurrentTime) => {

        let index = 0;

        // Search through all classes for each second and only includes this timestamp 
        classesForCurrentTime.some(classification => {

          if (classification.includes(this.props.filterClass)) {
            rows.push(
              <Tag 
                tag={classification}
                prob={this.props.tag.probs[time][index]}
                time={time}
                key={time}
                onClick={this.props.onClick}
              />
            );

            return true;
          }

          index++;
          return false;
        });

        time++;

      });

    }

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

export default PlayerFilter;