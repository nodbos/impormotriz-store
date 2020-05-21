import React from 'react';
import HistoryItem from '../history-item/history-item.components';
import WithSlider from '../with-slider/with-slider.component';
import imgTest from '../../assets/img/impormotriz_exterior_1.jpg';

import './histories-directory.styles.scss';

const HISTORIES_DATA = [
    {
        title: 'Titulo',
        description: 'Eu quis consectetur non exercitation.',
        imageUrl: imgTest,
    },
    {
        title: 'Titulo',
        description: 'Eu quis consectetur non exercitation.',
        imageUrl: imgTest,
    },
    {
        title: 'Titulo',
        description: 'Eu quis consectetur non exercitation.',
        imageUrl: imgTest,
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
