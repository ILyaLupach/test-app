import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Post from './Post'

const Posts = ({posts}) => (
    posts 
    ? posts.map(post => <Post key={post.id} post={post} />)
    : <h4>Постов пока нет</h4>)

Posts.propTypes = {
    posts: PropTypes.array
};

const mapStateToProps = state => ({
    posts: state.posts.posts
})

export default connect(mapStateToProps, null)(Posts);
