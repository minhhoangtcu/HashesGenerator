import React, { Component } from 'react';
import './InputBox.css';

// Because InputBox is just an input, we need to use this component inside <form>
class InputBox extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onUserInput(
      this.refs.urlInput.value
    );
  }

  render() {
    return(
      <input 
        type='text' 
        placeholder={this.props.placeholder} 
        className='Input Input__textfield'
        value={this.props.urlInput}
        ref='urlInput'
        onChange={this.handleChange}
      />
    );
  }
}

export default InputBox;