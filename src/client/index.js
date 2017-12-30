import ReactDOM from 'react-dom';
import React from 'react';
import App from './containers/App';
import './scss/main.scss';
import {Provider} from 'react-redux';
import store from './store';

const { render } = ReactDOM;


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react-container'),
);
