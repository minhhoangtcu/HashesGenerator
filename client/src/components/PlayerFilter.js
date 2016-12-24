import React, { Component } from 'react';

class PlayerFilter extends Component {
  render() {
    return(
      <div>
        <Tag tags={['human', 'shit', 'son']} time='00:00:01'/>
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
      <div>
        <p>{tags}</p>
        <p>{this.props.time}</p>
      </div>
    );
  }
}

export default PlayerFilter;