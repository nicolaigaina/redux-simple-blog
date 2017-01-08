/**
 * Created by nicolaigaina on 1/7/17.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import {Link} from 'react-router';

class PostsShow extends Component{

    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    static contextTypes = {
        router: PropTypes.object
    };

    deletePost(){
        this.props.deletePost(this.props.params.id).then(()=>{
            this.context.router.push('/');
        })
    }

    render(){

        const post = this.props.post;
        if(!post){
            return <div>Loading....</div>
        }



        return(
            <div>
                <Link to="/">View all</Link>
                <button
                    onClick={deletePost.bind(this)}
                    className="btn btn-danger pull-xs-right">
                    Delete
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state);
    return {
        post: state.posts.post
    };
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);