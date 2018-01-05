import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import App from './ui/containers/App';
import './ui/styles/scss/main.scss';

const { render } = ReactDOM;

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react-container'),
);
