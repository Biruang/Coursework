import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<a className="navbar-brand">Logo</a>
			</nav>
		);
	}
}

const mapStateToProps = store => {
	return {
		user: store.user,
	};
};

export default connect(mapStateToProps)(Header);
