import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.scss';
import * as serviceWorker from './serviceWorker';
// import { Provider } from 'react-redux';
// import store from './store';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
