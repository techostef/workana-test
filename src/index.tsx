import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import App from './contents/App';
import rootStore from './stores';

const store = process.env.NODE_ENV === 'production' ? createStore(rootStore, applyMiddleware(thunk)) : createStore(rootStore, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    // eslint-disable-next-line comma-dangle
    document.getElementById('root')
);
