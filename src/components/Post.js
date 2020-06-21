import React from 'react';
import PropTypes from 'prop-types';

const Post = ({post}) => {
    return (
        <div className='card'>
            <div className='card-body'>
                <h4 className='card-title'>
                    {post.title}
                </h4>
            </div>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object
};

export default Post;
