import React from 'react';
import { connect } from 'react-redux';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import Main from './main/main';
import './app.css';
import { Redirect } from 'react-router-dom';

class App extends React.Component {
	render() {
		var body = (
			<React.Fragment>
				<Header />
				<main className="main">
					<div className="container-fluid h-100">
						<div className="row h-100">
							<aside className="col-lg-2 col-sm-4 p-0">
								<Sidebar />
							</aside>
							<section className="col-lg-10 col-sm-8 p-0">
								<Main />
							</section>
						</div>
					</div>
				</main>
			</React.Fragment>
		);
		return <React.Fragment>{body}</React.Fragment>;
	}
}

const mapStateToProps = store => {
	return {
		tasks: store.tasks,
		taskLists: store.taskLists,
		auth: store.auth,
	};
};

export default connect(mapStateToProps)(App);
