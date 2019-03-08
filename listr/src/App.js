import React, { Component } from 'react';
/*Dependencies*/
/*Stylesheet*/
import './styles/App.css';
/*Components*/
import List from './comp/List/List.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <List />
      </div>
    );
  }
}

export default App;
