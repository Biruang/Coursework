import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store/configureStore.jsx';
import { Provider } from 'react-redux';
import App from './containers/App.jsx';

import './style.scss';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
