import React , { Component } from 'react';

const title = {
  textAlign: "right",
  fontStyle: "italic",
  paddingBottom: "1em"
}

const status = {
}

const one = {
  textAlign: "left",
  margin: "2em"
}

const two = {
  textAlign: "right",
  margin: "3em"
}

export default class Blue extends Component {
  render() {
    return(
      <div>
        <div id="cover">
          <h2 style={title}>blue haze</h2>
          <hr />
          <div style={status}>
            <p style={one}>a tale</p>
            <p style={two}>of love</p>
            <p>and the</p>
            <p>lack of it</p>
          </div>
        </div>
      </div>
    );
  }
}