import React, { Component } from 'react';
import './components/App.css';

import Home from './components/home';
import Content from './components/content';
import Play from './components/playlist';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Content />
        <Play />
        <Footer />
      </div>
    );
  }
}

export default App;
