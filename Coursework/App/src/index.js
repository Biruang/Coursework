import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import { store } from './store/configureStore';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
