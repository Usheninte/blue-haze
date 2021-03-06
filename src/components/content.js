import React , { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Un from './views/1un';
import Deux from './views/2deux';
import Trois from './views/3trois';
import Quatre from './views/4quatre';
import Cinq from './views/5cinq';

const foam = {
  margin: "1em"
}

export default class Content extends Component {
  render() {
    return(
      <Router>
        <div className="container-fluid">
          <br /><br />
          <h6>click a numbered button</h6>
          <h6>& scroll down to read poem</h6>
          <div style={foam} className="row">
            <div className="col"></div>
            <div style={foam} className="col-sm">
              <Link to="/un">
                <button type="button" class="btn btn-danger">1 - UN</button>
              </Link>
            </div>
            <div style={foam} className="col-sm">
              <Link to="/deux">
                <button type="button" class="btn btn-danger">2 - DEUX</button>
              </Link>
            </div>
            <div style={foam} className="col-sm">
              <Link to="/trois">
                <button type="button" class="btn btn-danger">3 - TROIS</button>
              </Link>
            </div>
            <div className="col"></div>
          </div>
          
          <div style={foam} className="row">
            <div className="col"></div>
            <div style={foam} className="col-sm">
              <Link to="/quatre">
                <button type="button" class="btn btn-danger">4 - QUATRE</button>
              </Link>
            </div>
            <div style={foam} className="col-sm">
              <Link to="/cinq">
                <button type="button" class="btn btn-danger">5 - CINQ</button>
              </Link>
            </div>
            <div className="col"></div>
          </div>

          <Route path="/un" component={Un} />
          <Route path="/deux" component={Deux} />
          <Route path="/trois" component={Trois} />
          <Route path="/quatre" component={Quatre} />
          <Route path="/cinq" component={Cinq} />
        </div>
      </Router>
    );
  }
}
