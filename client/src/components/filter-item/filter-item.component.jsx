import React from 'react';
import { Link } from 'react-router-dom';

import './filter-item.styles.scss';

const FilterItem = ({ active, index, link, imageUrl, onClick }) => {
    return (
        <Link to={link}>
            <div
                onClick={onClick}
                style={{ backgroundImage: `url(${imageUrl})` }}
                className={`shop-filters-item ${
                    active[index] ? 'active' : ''
                }`}></div>
        </Link>
    );
};

export default FilterItem;
