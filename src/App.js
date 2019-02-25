import React, { Component } from 'react';
import Ninjas from './Ninjas';
//import './App.css';

class App extends Component {
  state = {
    ninjas : [
      {name:'Ryu',age: 30,belt: 'black',id:1},
      {name:'Yoshi',age: 20,belt: 'green',id: 2}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first react app</h1>
        <p>Welcome</p>
        <Ninjas name="Ryu" age="25" belt="black"></Ninjas>
        <Ninjas name="Jake" age="30" belt="brown"></Ninjas>
        
      </div>
    );
  }
}

export default App;
