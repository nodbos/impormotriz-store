import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsProductsFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import ProductsDirectory from './products-directory.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsProductsFetching,
});

const ProductsDirectoryContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(ProductsDirectory);

export default ProductsDirectoryContainer;
