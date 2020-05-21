import React from 'react';
import { Card, Image } from 'semantic-ui-react';

import './history-item.styles.scss';

const HistoryItem = ({ title, description, imageUrl }) => {
    return (
        <Card className='history-item'>
            <Image src={imageUrl} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Description>{description}</Card.Description>
            </Card.Content>
        </Card>
    );
};

export default HistoryItem;
