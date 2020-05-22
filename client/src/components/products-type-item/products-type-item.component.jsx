import React from 'react';
import { withRouter } from 'react-router-dom';

import './products-type-item.styles.scss';

/*<div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>COMPRA YA!</span>
            </div>*/

const ProductsTypeItem = ({
    title,
    imageUrl,
    size,
    history,
    linkUrl,
    match,
    extraClass,
}) => {
    //console.log(title);

    let iUrl = require(`../../assets/img/${imageUrl}`);

    return (
        <div
            className={`${size} products-type-item ${extraClass}`}
            onClick={() =>
                history.push(`${match.url}/${linkUrl.split('/')[1]}`)
            }>
            <div
                style={{
                    backgroundImage: `url(${iUrl})`,
                }}
                className='background-image'></div>
        </div>
    );
};

export default withRouter(ProductsTypeItem);
