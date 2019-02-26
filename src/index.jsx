import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/redux/store';
import App from './app/App';

import './app/asset/style/bootstrap-reboot.min.css';
import './app/asset/style/bootstrap.min.css';
import './app/asset/style/index.css';
import './app/asset/style/App.css';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));