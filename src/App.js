import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import First from './components/first'
import Second from './components/second'
import Welcome from './components/welcome'
import Hello from './components/hello'
import WelcomeVisitor from './components/welcomevisitor'
import Counter from './components/counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from  './components/ParentComponent'
import Namelist from  './components/Namelist'
import PersonList from './components/Personlist'
import LoginForm from './components/LoginForm'

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <ParentComponent />
      <PersonList /> */}
      <LoginForm />
      {/* <Namelist /> */}
      
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Counter /> */}
        {/* <WelcomeVisitor /> */}
        {/* <First name = 'Pankaj' sirName = 'Bhardwaj'>
          <p>This is children Props</p>
        </First>
        <First name = 'Tryambak' sirName = 'Dwivedi'>
        <button>Action</button>
        </First>
        <First name = 'Subhi' sirName = 'Mishra'/>
        <Welcome name = 'Pankaj' sirName = 'Bhardwaj'/> */}
        {/* <Second />
        <Hello /> */}
      </div>
    );
  }
}

export default App;
