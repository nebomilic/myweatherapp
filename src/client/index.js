import ReactDOM from 'react-dom';
import React from 'react';
import App from './containers/App';
import './scss/main.scss';

const { render } = ReactDOM;


render(
    <App />,
    document.getElementById('react-container'),
);
