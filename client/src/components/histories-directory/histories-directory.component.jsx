import React from 'react';
import HistoryItem from '../history-item/history-item.components';
import imgTest from '../../assets/img/impormotriz_exterior_1_web.jpg';

import './histories-directory.styles.scss';

const HISTORIES_DATA = [
    {
        title: 'Titulo',
        description:
            'Fugiat adipisicing enim adipisicing irure occaecat duis consectetur officia. Voluptate consequat aute sint veniam qui mollit minim adipisicing proident mollit ipsum cillum. Ut non culpa eu ea tempor reprehenderit labore et. Nisi esse sit aute dolore cupidatat sint dolor voluptate ex ipsum commodo culpa est ea. Duis fugiat in dolore labore ex veniam sunt quis eu deserunt. Elit consectetur dolore anim dolor Lorem quis cupidatat pariatur.',
        imageUrl: imgTest,
        side: true,
    },
    {
        title: 'Titulo',
        description:
            'Esse in enim eu reprehenderit nostrud qui nisi magna mollit fugiat tempor. Deserunt reprehenderit consectetur eu aute adipisicing. Excepteur minim do incididunt sint minim et adipisicing adipisicing anim magna nulla cillum.',
        imageUrl: imgTest,
        side: false,
    },
    {
        title: 'Titulo',
        description:
            'Reprehenderit enim minim adipisicing sint labore non. Labore consequat eu et officia do enim dolore duis nisi tempor duis. Nisi duis veniam dolor adipisicing laboris adipisicing ex. Eu consequat aliqua nisi non consequat elit nisi sunt. Proident sint dolore cillum id incididunt duis ut Lorem consectetur cupidatat eiusmod nulla minim. Pariatur elit sit pariatur id fugiat qui exercitation exercitation veniam eiusmod ea. Anim cillum voluptate Lorem mollit.',
        imageUrl: imgTest,
        side: true,
    },
];

const HistoriesDirectory = () => {
    return (
        <div className='histories-directory'>
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
        </div>
    );
};

export default HistoriesDirectory;
