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
import ChildComponent from './components/ChildComponent'
import Namelist from  './components/Namelist'
import PersonList from './components/Personlist'
import LoginForm from './components/LoginForm'
import Form from './components/Form';
import FormTest from './components/formTest'
import ParentComp from './components/ParentComp'
import LifecycleA  from './components/LifecycleA'
import FragmentDemo from './components/FragmentDemo'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import ComponentC from './components/ComponentC'
import HookCounter from './components/hooks/HookCounter'
import HookCounterTwo from './components/hooks/HookCounterTwo'
import HookCounterThree from './components/hooks/HookCounterThree'
import HookCounterFour from './components/hooks/HookCounterFour'
import { UserProvider } from './components/userContext'
import Container from './container'


// ParentComp for purecomponent
//ClickCounter and HoverCounter for HOC demo
class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <Container/> */}
        {/* <HookCounter / > */}
        <HookCounterFour/>
        {/* <ComponentC /> */}
        {/* <FragmentDemo /> */}
        {/* <ClickCounter name='pankaj'/>
        <HoverCounter /> */}
        {/* <LifecycleA /> */}
        {/* <FormTest /> */}
        {/* <ParentComp /> */}
        {/* <ParentComponent /> */}
        {/* <PersonList /> */}
        {/* <LoginForm /> */}
        {/* <Namelist /> */}
      
        {/* <EventBind /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <Counter />
        <WelcomeVisitor /> */}
        {/* <First name = 'Pankaj' sirName = 'Bhardwaj'>
          <p>This is children Props</p>
          <p>This is children Props</p>
          <p>This is children Props</p>
          <p>This is children Props</p>
          <p>This is children Props</p>
        </First>
        <First name = 'XYZ' sirName = 'SDGF'>
        <button>Action</button>
        </First> */}
        {/* <First name = 'Subhi' sirName = 'Mishra'/> */}
        {/* <Welcome name = 'Pankaj' sirName = 'Bhardwaj'/> */}
        {/* <Second />
        <Hello /> */}
      </div>
    );
  }
}

export default App;
