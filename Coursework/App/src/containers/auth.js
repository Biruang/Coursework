import React from 'react';
import { connect } from 'react-redux';
import './app.css';

class Auth extends React.Component {
	render() {
		return (
			<React.Fragment>
				<span>fff</span>
			</React.Fragment>
		);
	}
}

const mapStateToProps = store => {
	return {
		auth: store.auth,
	};
};

export default connect(mapStateToProps)(Auth);
