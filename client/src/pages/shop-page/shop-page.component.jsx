import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProductsStart } from '../../redux/shop/shop.actions';

import Spinner from '../../components/spinner/spinner.component';
import ErrorBoundary from '../../components/error/error-boundary.component';

import chevrolet from '../../assets/img/carLogoChevrolet.png';
import hyundai from '../../assets/img/carLogoHyundai.png';
import kia from '../../assets/img/carLogoKia.png';
import mazda from '../../assets/img/carLogoMazda.png';
import renault from '../../assets/img/carLogoRenault.png';
import todo from '../../assets/img/carLogoTodo.png';

import FilterItem from '../../components/filter-item/filter-item.component';

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

const FILTER_DATA = [
    {
        link: '/catalogo/todo',
        imageUrl: todo,
    },
    {
        link: '/catalogo/chevrolet',
        imageUrl: chevrolet,
    },
    {
        link: '/catalogo/hyundai',
        imageUrl: hyundai,
    },
    {
        link: '/catalogo/kia',
        imageUrl: kia,
    },
    {
        link: '/catalogo/mazda',
        imageUrl: mazda,
    },
    {
        link: '/catalogo/renault',
        imageUrl: renault,
    },
];

class ShopPage extends Component {
    state = {
        active: this._firstActive(),
    };

    _firstActive() {
        const baseArray = [false, false, false, false, false, false];

        FILTER_DATA.map((element, index) => {
            if (
                this.props.location.pathname.split('/')[2] ===
                element.link.split('/')[2]
            ) {
                baseArray[index] = !baseArray[index];
            }
            return baseArray;
        });

        return baseArray;
    }

    componentDidMount() {
        const { fetchProductsStart } = this.props;
        fetchProductsStart();
    }

    _onClickHandler(index) {
        const baseArray = [false, false, false, false, false, false];

        baseArray[index] = !baseArray[index];

        this.setState({
            active: [...baseArray],
        });
    }

    render() {
        const { match } = this.props;

        return (
            <div className='shop-page'>
                <div className='shop-filters'>
                    {FILTER_DATA.map(({ ...otherProps }, index) => {
                        return (
                            <FilterItem
                                key={index}
                                index={index}
                                active={this.state.active}
                                onClick={() =>
                                    this._onClickHandler(index)
                                }
                                {...otherProps}
                            />
                        );
                    })}
                </div>
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
