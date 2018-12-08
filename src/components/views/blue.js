import React , { Component } from 'react';

const foam = {
  margin: "1em"
}

export default class Blue extends Component {
  render() {
    return(
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <img src={'https://res.cloudinary.com/poetrique/image/upload/v1544283930/nullthefirst/Nullthefirst_blue-HAZE.png'} alt="blue HAZE" title="blue HAZE" />
            </div>
          </div>
          <div style={foam} className="row">
            <div className="col">
              <button type="button" class="btn btn-danger">BEGIN</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}