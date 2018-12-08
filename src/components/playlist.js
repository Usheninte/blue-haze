import React, { Component } from 'react';
import Iframe from 'react-iframe';

export default class Play extends Component {
  render() {
    return(
      <div>
        <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
        width="90%"
        height="auto"
        display="initial"
        position="relative"
        allowFullScreen/>
      </div>
    );
  }
}