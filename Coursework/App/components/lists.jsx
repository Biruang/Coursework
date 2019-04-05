import React, { Component } from 'react';

class Lists extends Component {
	render() {
		return (
			<ul className="list-group">
				{this.props.lists.map(list => {
					return <li className="list-group-item">{list.name}</li>;
				})}
			</ul>
		);
	}
}

export default Lists;
