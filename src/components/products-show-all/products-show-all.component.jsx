import React from 'react';
import ProductItem from '../product-item/product-item.components';

import './products-show-all.styles.scss';

const ProductsShowAll = ({ title, articulos }) => {
    return (
        <div className='products-show-all'>
            {title.toLowerCase() === 'todo' ? null : (
                <h1 className='title'>{title.toUpperCase()}</h1>
            )}
            <div className='ui preview'>
                {articulos
                    .filter((articulo, index) => index < 4)
                    .map(articulo => {
                        return (
                            <ProductItem
                                key={articulo.id}
                                item={articulo}
                                title={title}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default ProductsShowAll;
