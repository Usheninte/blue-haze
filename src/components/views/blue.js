import React , { Component } from 'react';

const title = {
  textAlign: "right",
  fontStyle: "italic",
  paddingBottom: "1em"
}

const status = {
  textAlign: "left",
  margin: "0.8em"
}

export default class Blue extends Component {
  render() {
    return(
      <div>
        <div id="cover">
          <h2 style={title}>blue haze</h2>
          <hr />
          <div style={status}>
            <p>a tale</p>
            <p>of love</p>
            <p>and the</p>
            <p>lack of it</p>
          </div>
        </div>
      </div>
    );
  }
}