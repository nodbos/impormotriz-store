import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsProductsFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import ProductsShowSome from './products-show-some.components';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsProductsFetching,
});

const ProductsShowSomeContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(ProductsShowSome);

export default ProductsShowSomeContainer;
