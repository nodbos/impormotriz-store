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
    return (
        <div className='product-show-some'>
            <ButtonBack />
            {products.map(({ id, ...otherProductProps }) => {
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
