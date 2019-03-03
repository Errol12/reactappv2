import React,{ Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Post extends Component {

    // state = {
    //     id: null,
    //     post: null
    // }

    // componentDidMount(){
    //     let id = this.props.match.params.post_id;
    //     this.setState({
    //         id: id
    //     })
    //     axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
    //         .then(res => {
    //             console.log(res);
    //             this.setState({
    //                 post: res.data
    //             })
    //         })
    //     console.log(this.state.post);
        
    // }
    render(){
        console.log(this.props.post);
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
            </div>
        ) : (
            <div className="center">Loading data...</div>
        )
        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {

    let id = ownProps.match.params.post_id;
    var id1 = Number(id);
    //console.log(id1);
    return {
        post: state.posts.find(post => post.id === id1) 
    }

}

export default connect(mapStateToProps)(Post);