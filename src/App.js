import React, { Component } from 'react';
import Navbar from './components/Navbar';
//import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  
  componentDidMount(){
    console.log('Component mounted');
  }

  componentDidUpdate(prevProps,prevState){
    console.log('Component updated');
    console.log(prevProps,prevState);
  }
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar/>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
        
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
