import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProductsStart } from '../../redux/shop/shop.actions';
import ProductDirectoryContainer from '../../components/products-directory/products-directory.container';
import ProductPageContainer from '../product-page/product.container';
import ProductSpecificContainer from '../../components/products-show-some/products-show-some.container';

import './shop-page.styles.scss';

const mapDispatchToProps = dispatch => ({
    fetchProductsStart: () =>
        dispatch(fetchProductsStart('products')),
});

class ShopPage extends Component {
    componentDidMount() {
        const { fetchProductsStart } = this.props;
        fetchProductsStart();
    }

    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Switch>
                    <Route
                        exact
                        path={`${match.path}`}
                        component={ProductDirectoryContainer}
                    />
                    <Route
                        exact
                        path={`${match.path}/todo`}
                        component={ProductSpecificContainer}
                    />
                    <Route
                        exact
                        path={`${match.path}/:productId`}
                        component={ProductPageContainer}
                    />
                </Switch>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(ShopPage);
