import React, { Component } from 'react';
import Iframe from 'react-iframe';

export default class Play extends Component {
  render() {
    return(
      <div>
        <Iframe url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/659141667&color=%23ed6165&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        width="90%"
        height="auto"
        display="initial"
        position="relative"
        allow="autoplay"
        allowFullScreen/>
      </div>
    );
  }
}