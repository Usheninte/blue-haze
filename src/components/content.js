import React , { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const foam = {
  margin: "1em"
}

export default class Blue extends Component {
  render() {
    return(
      <Router>
        <div className="container-fluid">
          <div style={foam} className="row">
            <div className="col">
              <Link to="/un">
                <button type="button" class="btn btn-danger">BEGIN</button>
              </Link>
            </div>
          </div>

          <Route path="/un" component={Un} />
        </div>
      </Router>
    );
  }
}