import React, { Component } from 'react';
import './components/App.css';

import Blue from './components/views/blue';
import Content from './components/content';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Blue />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
