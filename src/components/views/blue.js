import React , { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Un from './1un';

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
          <Router>
            <div style={foam} className="row">
              <div className="col">
                <Link to="/un">
                  <button type="button" class="btn btn-danger">BEGIN</button>
                </Link>

                <Route path="/un" component={Un} />
              </div>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}