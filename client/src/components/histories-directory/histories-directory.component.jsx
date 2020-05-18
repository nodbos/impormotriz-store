import React from 'react';
import HistoryItem from '../history-item/history-item.components';
import WithSlider from '../with-slider/with-slider.component';

import './histories-directory.styles.scss';

const HISTORIES_DATA = [
    {
        title: 'Titulo',
        description: 'Eu quis consectetur non exercitation.',
        imageUrl:
            'https://via.placeholder.com/2000x1400/e0e0e0/ffffff/?text=History',
    },
    {
        title: 'Titulo',
        description: 'Eu quis consectetur non exercitation.',
        imageUrl:
            'https://via.placeholder.com/2000x1400/e0e0e0/ffffff/?text=History',
    },
    {
        title: 'Titulo',
        description: 'Eu quis consectetur non exercitation.',
        imageUrl:
            'https://via.placeholder.com/2000x1400/e0e0e0/ffffff/?text=History',
    },
];

const HistoriesDirectory = () => {
    return (
        <div className='histories-directory'>
            <WithSlider>
                {HISTORIES_DATA.map(
                    ({ ...otherCollectionProps }, index) => {
                        return (
                            <HistoryItem
                                key={index}
                                {...otherCollectionProps}
                            />
                        );
                    }
                )}
            </WithSlider>
        </div>
    );
};

export default HistoriesDirectory;
