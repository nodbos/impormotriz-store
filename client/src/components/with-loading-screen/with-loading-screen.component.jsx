import React from 'react';

import './with-loading-screen.styles.scss';

const WithLoadingScreen = () => {
    return (
        <div
            className={`ipl-progress-indicator`}
            id='ipl-progress-indicator'>
            <div className='ipl-progress-indicator-head'>
                <div className='first-indicator'></div>
                <div className='second-indicator'></div>
            </div>
            <div className='insp-logo-frame'>
                <img
                    className='insp-logo-frame-img'
                    src='./android-chrome-192x192.png'
                    alt='Impormotriz Logo'
                />
            </div>
        </div>
    );
};

export default WithLoadingScreen;
