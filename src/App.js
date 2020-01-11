import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './container'


// ParentComp for purecomponent
//ClickCounter and HoverCounter for HOC demo
class App extends Component {
  render() {
    return (
      <div className="App">
      <Container/>
      </div>
    );
  }
}

export default App;
