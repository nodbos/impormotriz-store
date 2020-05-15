//import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './root.reducer';
import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root.sagas';

const loggerConfig = createLogger({
    collapsed: true,
});

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]; //thunk

if (process.env.NODE_ENV === 'development') {
    middlewares.push(loggerConfig);
}

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
