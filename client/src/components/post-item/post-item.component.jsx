import React from 'react';
import { withRouter } from 'react-router-dom';

import './post-item.styles.scss';

const PostItem = ({
    title,
    imageUrl,
    content,
    description,
    history,
    linkUrl,
    match,
}) => {
    return (
        <div
            className='post-item'
            onClick={() => history.push(`${linkUrl}`)}>
            <div
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
                className='background-image'></div>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='description'>{`${description.substring(
                    0,
                    80
                )}...`}</span>
            </div>
        </div>
    );
};

export default withRouter(PostItem);
