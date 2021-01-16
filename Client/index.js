/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import getData from './Controller';

const target = document.getElementById('root');

ReactDOM.render(<App getData={getData} />, target);
