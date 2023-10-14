import React from "react";
import createRoot from "react-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

import App from './App';
import './index.css'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

createRoot.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
