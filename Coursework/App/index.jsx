//JS
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store/configureStore.js';
import { Provider } from 'react-redux';
import Content from './containers/content.jsx';
import Sidebar from './containers/sidebar.jsx';
import Header from './containers/header.jsx';
import 'bootstrap';
//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

ReactDOM.render(
	<Provider store={store}>
		<header>
			<Header />
		</header>
		<div className="container-fluid">
			<div className="row">
				<div className="col-3">
					<Sidebar />
				</div>
				<div className="col">
					<Content />
				</div>
			</div>
		</div>
	</Provider>,
	document.getElementById('root')
);
