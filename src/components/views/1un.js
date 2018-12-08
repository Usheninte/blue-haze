import React , { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Blue from './blue';

const foam = {
  margin: "1em"
}

export default class Un extends Component {
  render() {
    return(
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <img src={''} alt="blue HAZE" title="blue HAZE" />
            </div>
          </div>
          <Router>
            <div style={foam} className="row">
              <div className="col">
                <NavLink to="/">
                  <button type="button" class="btn btn-danger">COVER</button>
                </NavLink>

                <Route exact path="/" component={Blue} />
              </div>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}