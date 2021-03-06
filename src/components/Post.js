import React,{ Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import deletePost from '../actions/postActions';

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

    handleClick = () => {
        //console.log('hitted');
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/about');
    }

    render(){
        console.log(this.props);
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>
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

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {dispatch(deletePost(id))}
    }


}



export default connect(mapStateToProps,mapDispatchToProps)(Post);