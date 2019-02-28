import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';
import './App.css';

class App extends Component {
  state = {
    ninjas : [
      {name:'Ryu',age: 30,belt: 'black',id:1},
      {name:'Yoshi',age: 20,belt: 'green',id: 2}
    ]
  }

  addNinja = (ninja) => {
    console.log(ninja);
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]; //spread operator
    console.log(ninjas);
    this.setState({
      ninjas: ninjas
    })
    
  }

  deleteNinja = (id) => {
    console.log(id)
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
  }

  componentDidMount(){
    console.log('Component mounted');
  }

  componentDidUpdate(prevProps,prevState){
    console.log('Component updated');
    console.log(prevProps,prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>My first react app</h1>
        <p>Welcome</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
