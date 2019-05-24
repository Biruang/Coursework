import React, { Component } from 'react';

class Purpouses extends Component {
	render() {
		let body;
		if (this.props.loading) {
			body = (
				<div class="spinner-border" role="status">
					<span class="sr-only">Loading...</span>
				</div>
			);
		} else {
			body = this.props.purposes.map(purpose => {
				return <li className="list-group-item">{purpose.name}</li>;
			});
		}
		return <ul className="list-group">{body}</ul>;
	}
}

export default Purpouses;
