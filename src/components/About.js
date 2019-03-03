import React,{ Component } from 'react';
import Ninjas from '../Ninjas';
import AddNinja from '../AddNinja';
//import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class About extends Component {
    state = {
        ninjas : [
          {name:'Ryu',age: 30,belt: 'black',id:1},
          {name:'Yoshi',age: 20,belt: 'green',id: 2}
        ]
        //posts : []
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

      //https://jsonplaceholder.typicode.com/
    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //             console.log(res);
    //             this.setState({
    //                 posts: res.data.slice(0,10)
    //             })
    //         })
    // } 
    
    
    render(){
      //console.log('redux echo here');
        //console.log(this.props);
        const  posts  = this.props.posts;
        //console.log('herte',posts);
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <span className="card-title">{post.title}</span>
                            <NavLink to={"/"+post.id}>About</NavLink>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center"></div>
        )
        return (
            <div className="container">
                <h4 className="center">About Page</h4>
                <h1>My first react app</h1>
            <p>Welcome</p>
            <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
            <AddNinja addNinja={this.addNinja}/>
            {postList}
            </div>
        )
    }
    
}

//Specify data we need to grab from store
const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
} 


export default connect(mapStateToProps)(About);