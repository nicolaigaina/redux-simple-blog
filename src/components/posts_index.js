/**
 * Created by nicolaigaina on 12/24/16.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostIndex extends  Component{

    componentWillMount(){
        this.props.fetchPosts();
    }

    renderPosts(){
        return this.props.posts.map((post)=>{
            return(
                <li key={post.id} className="list-group-item">
                    <Link to={`posts/${post.id}`}>
                        <span className="pull-xs-right">{post.categories}</span>
                        <strong className="padding">{post.title}</strong>
                    </Link>
                </li>
            )
        })
    }


    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Create Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}


/*
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPosts}, dispatch);
}


// this gives us this.props.fetchPosts function inside our component class
export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);*/

function mapStateToProps(state) {
    return{
        posts: state.posts.all
    };
}

export default connect(mapStateToProps, {fetchPosts})(PostIndex);