import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'mdbreact';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Blue from './views/blue';

export default class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar color="danger-color" dark expand="md" scrolling>
            <NavbarBrand href="/">
              <strong>HOME</strong>
            </NavbarBrand>
          </Navbar>

          <Route exact path="/" component={Blue} />
        </div>
      </Router>
    );
  }
}
