// react library
import React, { Component } from 'react';

// component
import Page from './components/Page';

// style
import './assets/scss/global.scss';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Page />
      </div>
    );
  }
}

export default App;
