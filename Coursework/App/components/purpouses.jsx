import React, { Component } from 'react';

class Purpouses extends Component {
	render() {
		return (
			<ul className="list-group">
				{this.props.purpouses.map(purpouse => {
					return <li className="list-group-item">{purpouse.name}</li>;
				})}
			</ul>
		);
	}
}

export default Purpouses;
