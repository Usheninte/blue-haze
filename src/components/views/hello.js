import React , { Component } from 'react';

const hey = {
  margin: "5em"
}

export default class Hello extends Component {
  render() {
    return(
      <div>
        <h1 style={hey}>Hello World</h1>
      </div>
    );
  }
}