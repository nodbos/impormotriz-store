import ShopActionTypes from './shop.types';

export const fetchProductsStart = type => ({
    type: ShopActionTypes.FETCH_PRODUCTS_START,
    payload: type,
});

export const fetchProductsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: collectionsMap,
});

export const fetchPostsSuccess = productsMap => ({
    type: ShopActionTypes.FETCH_POSTS_SUCCESS,
    payload: productsMap,
});

export const fetchProductsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_PRODUCTS_FAILURE,
    payload: errorMessage,
});
