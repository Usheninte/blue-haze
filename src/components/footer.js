import React, { Component } from 'react';

const footerStyle = {
  textAlign: "center",
  marginTop: "4em",
  marginBottom: "2em"
}

const code = {
  color: "#f0f0f0",
  fontStyle: "bold"
}

const x = {
  color: "#ed6461"
}

export default class Footer extends Component {
  render() {
    return(
      <div style={footerStyle}>
        <a
          href="https://github.com/Usheninte"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h5 style={x}>Nullthefirst <i style={code} class="fas fa-code"></i> 2018</h5> 
        </a>
      </div>
    );
  }
}
