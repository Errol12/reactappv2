import React,{ Component } from 'react';
import axios from 'axios';
class Post extends Component {

    state = {
        id: null,
        post: null
    }

    componentDidMount(){
        let id = this.props.match.params.post_id;
        this.setState({
            id: id
        })
        axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
            .then(res => {
                console.log(res);
                this.setState({
                    post: res.data
                })
            })
        console.log(this.state.post);
        
    }
    render(){
        const post = this.state.post ? (
            <div className="post">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
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

export default Post;