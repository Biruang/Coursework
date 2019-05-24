import React, { Component } from 'react';

class Lists extends Component {
	render() {
		let body;
		if (this.props.loading == true) {
			body = (
				<div class="spinner-border" role="status">
					<span class="sr-only">Loading...</span>
				</div>
			);
		} else {
			body = this.props.lists.map(list => {
				return <li className="list-group-item">{list.name}</li>;
			});
		}
		return <ul className="list-group">{body}</ul>;
	}
}

export default Lists;
