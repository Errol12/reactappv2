import React,{ Component } from 'react';
import Ninjas from '../Ninjas';
import AddNinja from '../AddNinja';
class About extends Component {
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
    render(){
        return (
            <div className="container">
                <h4 className="center">About Page</h4>
                <h1>My first react app</h1>
            <p>Welcome</p>
            <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
            <AddNinja addNinja={this.addNinja}/>
            </div>
        )
    }
    
}

export default About;