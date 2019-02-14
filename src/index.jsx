import React from 'react';
import ReactDOM from 'react-dom';
import './app/style/bootstrap-reboot.min.css';
import './app/style/bootstrap.min.css';
import './app/style/index.css';
import App from './app/App';
import * as serviceWorker from './app/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
