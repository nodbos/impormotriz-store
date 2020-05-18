import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectProductsForPreview } from '../../redux/shop/shop.selectors';
import ProductsShowAll from '../products-show-all/products-show-all.component';
import ButtonBack from '../button-back/button-back.component';

import './products-show-some.styles.scss';

const mapStateToProps = createStructuredSelector({
    products: selectProductsForPreview,
});

const ProductsShowSome = ({ products }) => {
    const newProduct = products.map(product => {
        if (product.title === 'Todo') {
            return null;
        }
        return product;
    });
    if (newProduct[0] === null) {
        newProduct.shift();
    }

    return (
        <div className='product-show-some'>
            <ButtonBack />
            {newProduct.map(({ id, ...otherProductProps }) => {
                return (
                    <ProductsShowAll
                        key={id}
                        {...otherProductProps}
                    />
                );
            })}
        </div>
    );
};

export default connect(mapStateToProps)(ProductsShowSome);
