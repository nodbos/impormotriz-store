import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './redux/store';
import WithScroll from './components/with-scroll/with-scroll.component';

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <PersistGate persistor={persistor}>
                    <WithScroll>
                        <App />
                    </WithScroll>
                </PersistGate>
            </React.StrictMode>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
