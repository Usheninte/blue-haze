import React, { Component } from 'react';

const x = {
  color: "#ed6461"
}

export default class Open extends Component {
  render() {
    return(
      <div>
        <hr />
        <a
          href="https://github.com/Usheninte/blue-haze"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4 style={x}>Open Source Code <i class="fab fa-github"></i></h4>
        </a>
        <hr />
      </div>
    );
  }
}