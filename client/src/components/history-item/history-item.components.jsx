import React from 'react';

import './history-item.styles.scss';

const HistoryItem = ({ title, description, imageUrl, side }) => {
    return (
        <div className={`history-item ${side ? 'left' : 'right'}`}>
            <div
                className={`history-img ${side ? 'left' : 'right'}`}
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className='history-content'>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default HistoryItem;
