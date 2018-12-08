import React , { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Un from './views/1un';
import Deux from './views/2deux';
import Trois from './views/3trois';

const foam = {
  margin: "1em"
}

export default class Content extends Component {
  render() {
    return(
      <Router>
        <div className="container-fluid">
          <div style={foam} className="row">
            <div className="col">
              <Link to="/un">
                <button type="button" class="btn btn-danger">1 - UN</button>
              </Link>
            </div>
            <div className="col">
              <Link to="/deux">
                <button type="button" class="btn btn-danger">2 - DEUX</button>
              </Link>
            </div>
            <div className="col">
              <Link to="/trois">
                <button type="button" class="btn btn-danger">3 - TROIS</button>
              </Link>
            </div>
          </div>
        
          <Route path="/un" component={Un} />
          <Route path="/deux" component={Deux} />
          <Route path="/trois" component={Trois} />
        </div>
      </Router>
    );
  }
}