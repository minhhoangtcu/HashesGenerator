import React, { Component } from 'react';
import './PlayerFilter.css';
import InputBox from './InputBox.js';
import Tag from './Tag';

class PlayerFilter extends Component {

  constructor(props) {
    super(props);

    this.getHeight = this.getHeight.bind(this);
  }

  getHeight() {
    return this.props.videoDOM !== undefined 
           ? this.props.videoDOM.videoHeight - 35 // 35px is the height of the input box
           : '120px'; // default height
  }

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
                prob={this.props.tag.probs[time][index].toFixed(2)}
                time={time}
                key={time}
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

    const customFilterStyle = {
      height: this.getHeight(),
    };

    return(
      <div className='PlayerFilter'>
        <InputBox 
          placeholder={'Filter'}
          value={this.props.filterClass}
          onUserInput={this.props.onUserInput}
        />

        <div className='Timestamp' style={customFilterStyle}>
          {rows}
        </div>
      </div>
    );
  }
}

export default PlayerFilter;