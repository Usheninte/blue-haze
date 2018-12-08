import React , { Component } from 'react';

const title = {
  textAlign: "right",
  fontStyle: "italic",
  paddingBottom: "1em"
}

const one = {
  textAlign: "left",
  margin: "2em"
}

const two = {
  textAlign: "right",
  margin: "3em"
}

const three = {
  textAlign: "left",
  margin: "4.5em"
}

const four = {
  textAlign: "right",
  margin: "0.5em",
  padding: "2em"
}

const five = {
  textAlign: "left",
  margin: "2.5em"
}

export default class Blue extends Component {
  render() {
    return(
      <div>
        <div id="cover">
          <h2 style={title}>b-l-u-e _ h-a-z-e</h2>
          <hr />
          <div id="status">
            <p style={one}>a tale</p>
            <p style={two}>of love</p>
            <p style={three}>and the</p>
            <p style={four}>lack of it</p>
            <hr />
            <p style={five}>... that's it</p>
          </div>
        </div>
      </div>
    );
  }
}