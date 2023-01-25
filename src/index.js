import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './pages/instruction/styles.scss'
import App from './App';
import '../node_modules/@mdi/font/css/materialdesignicons.min.css';
// import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);