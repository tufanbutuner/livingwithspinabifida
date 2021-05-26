import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import axios from 'axios';
axios.defaults.baseURL = 'https://lwsb-v6aoj.ondigitalocean.app';


ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));
