import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsProductsFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import PostsDirectory from './posts-directory.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsProductsFetching,
});

const PostsDirectoryContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(PostsDirectory);

export default PostsDirectoryContainer;
