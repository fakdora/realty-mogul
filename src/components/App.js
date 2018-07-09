import React, { Component } from 'react';
import ContentList from './ContentList'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ContentList />
        </header>
      </div>
    );
  }
}

export default App;
