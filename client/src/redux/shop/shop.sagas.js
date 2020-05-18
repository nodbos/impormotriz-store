import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
    firestore,
    convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import {
    fetchPostsSuccess,
    fetchProductsSuccess,
    fetchProductsFailure,
} from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchProductAsync(action) {
    try {
        const productRef = firestore.collection(action.payload);
        const snapshot = yield productRef.get();

        const productsMap = yield call(
            convertCollectionsSnapshotToMap,
            snapshot,
            action.payload
        );

        if (action.payload === 'products') {
            yield put(fetchProductsSuccess(productsMap));
        } else if (action.payload === 'posts') {
            yield put(fetchPostsSuccess(productsMap));
        }
    } catch (error) {
        yield put(fetchProductsFailure(error.message));
    }
}

export function* onFetchProductsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_PRODUCTS_START,
        fetchProductAsync
    );
}

export function* shopSagas() {
    yield all([call(onFetchProductsStart)]);
}
