import React from 'react';
import { connect } from 'react-redux';
import { getTaskLists } from '../../actions/taskListsActions';
import './header.css';

class Header extends React.Component {
	render() {
		return (
			<header className="header-main">
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark h-100">
					<button className="navbar-brand">Logo</button>
				</nav>
			</header>
		);
	}
}

const mapStateToProps = store => {
	return {
		tasks: store.tasks,
		taskLists: store.taskLists,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getTaskLists: () => dispatch(getTaskLists()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);
