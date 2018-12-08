import React , { Component } from 'react';

const title = {
  textAlign: "right",
  fontStyle: "italic",
  paddingBottom: "1em"
}

const one = {
  textAlign: "left",
  margin: "1em 0 0 2em"
}

const two = {
  textAlign: "right",
  margin: "1em 3em 0 0"
}

const three = {
  textAlign: "left",
  margin: "3em 0 0 4.5em"
}

const four = {
  textAlign: "right",
  margin: "0.5em",
  padding: "1em 2em 0.5em 0"
}

const five = {
  backgroundColor: "#4fc9eb",
  textAlign: "center",
  color: "#f0f0f0",
  borderRadius: "40%",
  margin: "2.5em",
  padding: "1.2em"
}

export default class Blue extends Component {
  render() {
    return(
      <div>
        <div id="cover">
          <h2 style={title}>b-l-u-e . h-a-z-e</h2>
          <hr />
          <div id="status">
            <p style={one}>a tale</p>
            <p style={two}>of love</p>
            <p style={three}>and the</p>
            <p style={four}>lack of it</p>
            <p style={five}>... that's it</p>
          </div>
        </div>
      </div>
    );
  }
}