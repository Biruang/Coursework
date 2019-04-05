import React, { Component } from 'react';
import { connect } from 'react-redux';
import Purpouses from '../components/purpouses.jsx';
import Lists from '../components/lists.jsx';

class Sidebar extends Component {
	render() {
		return (
			<React.Fragment>
				<div>
					<button className="btn" data-toggle="collapse" href="#purpouses">
						Цели:
					</button>
					<div className="show" id="purpouses">
						<Purpouses purpouses={this.props.purpouses} />
					</div>
				</div>
				<div>
					<button className="btn" data-toggle="collapse" href="#lists">
						Списки:
					</button>
					<div className="collapse" id="lists">
						<Lists lists={this.props.lists} />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = store => {
	return {
		lists: store.sidebar.lists,
		purpouses: store.sidebar.purpouses,
	};
};

export default connect(mapStateToProps)(Sidebar);
