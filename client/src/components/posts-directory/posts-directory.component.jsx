import React from 'react';

import PostItem from '../post-item/post-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectPostExtras } from '../../redux/shop/shop.selectors';
import './posts-directory.styles.scss';

const mapStateToProps = createStructuredSelector({
    posts: selectPostExtras,
});

const PostsDirectory = ({ posts }) => {
    return (
        <div className='posts-directory'>
            {posts.map(({ ...otherCollectionProps }, index) => {
                return (
                    <PostItem key={index} {...otherCollectionProps} />
                );
            })}
        </div>
    );
};

export default connect(mapStateToProps)(PostsDirectory);
