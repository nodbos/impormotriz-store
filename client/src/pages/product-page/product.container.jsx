import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsProductsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import ProductPage from './product.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsProductsLoaded(state),
});

const ProductPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(ProductPage);

export default ProductPageContainer;
