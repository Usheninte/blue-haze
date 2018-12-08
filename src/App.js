import React, { Component } from 'react';
import './components/App.css';

import Blue from './components/views/blue';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Blue />
        <Footer />
      </div>
    );
  }
}

export default App;
