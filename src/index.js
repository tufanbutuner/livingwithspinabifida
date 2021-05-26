import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import axios from 'axios';
axios.defaults.baseURL = 'https://zen-hermann-4eb407.netlify.app';


ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));
