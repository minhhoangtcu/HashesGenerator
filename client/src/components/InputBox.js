import React, { Component } from 'react';
import './InputBox.css';

// Because InputBox is just an input, we need to use this component inside <form>
class InputBox extends Component {
  render() {
    return(
      <input type='text' placeholder='Please paste a link to your desired video here' className='Input Input__textfield'/>
    );
  }
}

export default InputBox;