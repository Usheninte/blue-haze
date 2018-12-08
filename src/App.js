import React, { Component } from 'react';
import './components/App.css';

import Hello from './components/views/hello';

class App extends Component {
  render() {
    return (
      <div>
        <Hello />
      </div>
    );
  }
}

export default App;
