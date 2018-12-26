import React, { Component } from 'react';

import ListItem from './components/ListItem/ListItem';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <ListItem />
        </div>
      </div>
    );
  }
}

export default App;
