import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux'
import Post from './Post';
import { fetchPosts } from '../actions';

const FetchedPosts = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchedPosts)
    const loading = useSelector(state => state.app.loading)
    if (loading) return <h2>loading...</h2>
    return posts && posts.length
    ? posts.map(post => <Post key={post.id} post={post} />)
    : (
        <button 
            className='btn btn-primary'
            onClick={() => dispatch(fetchPosts())}
        >
            Загрузить
        </button>
    )
};

FetchedPosts.propTypes = {
    posts: PropTypes.array
};

export default FetchedPosts;
