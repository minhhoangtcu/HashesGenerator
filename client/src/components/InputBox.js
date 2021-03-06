import React, { Component } from 'react';
import './InputBox.css';

// Because InputBox is just an input, we need to use this component inside <form>
class InputBox extends Component {

  render() {
    return(
      <input 
        type='text' 
        placeholder={this.props.placeholder} 
        className='Input Input__textfield'
        value={this.props.value}
        ref='urlInput'
        onChange={this.props.onUserInput}
      />
    );
  }
}

export default InputBox;