import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProductsStart } from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/spinner.component';
import ErrorBoundary from '../../components/error/error-boundary.component';

import './shop-page.styles.scss';

const ProductDirectoryContainer = lazy(() =>
    import(
        '../../components/products-directory/products-directory.container'
    )
);
const ProductPageContainer = lazy(() =>
    import('../product-page/product.container')
);
const ProductSpecificContainer = lazy(() =>
    import(
        '../../components/products-show-some/products-show-some.container'
    )
);

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
                    <ErrorBoundary>
                        <Suspense fallback={<Spinner />}>
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
                        </Suspense>
                    </ErrorBoundary>
                </Switch>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(ShopPage);
