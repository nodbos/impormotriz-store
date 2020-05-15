import ShopActionTypes from './shop.types';

const shopInitialState = {
    posts: null,
    products: null,
    collections: null,
    isFetching: false,
    errorMessage: undefined,
};

const shopReducer = (state = shopInitialState, action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_PRODUCTS_START:
            return { ...state, isFetching: true };
        case ShopActionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                products: action.payload,
            };
        case ShopActionTypes.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                posts: action.payload,
            };
        case ShopActionTypes.FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            };
        default:
            return state;
    }
};

export default shopReducer;
