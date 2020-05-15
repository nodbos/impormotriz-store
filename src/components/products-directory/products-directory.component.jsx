import React from 'react';

import ProductsTypeItem from '../products-type-item/products-type-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectProductExtras } from '../../redux/shop/shop.selectors';
import './products-directory.styles.scss';

const mapStateToProps = createStructuredSelector({
    products: selectProductExtras,
});

const ProductsDirectory = ({ products }) => {
    return (
        <div className='products-directory'>
            {products.map(({ ...otherProductProps }, index) => {
                return (
                    <ProductsTypeItem
                        key={index}
                        extraClass={index % 2 === 0 ? 'odd' : 'even'}
                        {...otherProductProps}
                    />
                );
            })}
        </div>
    );
};

export default connect(mapStateToProps)(ProductsDirectory);
