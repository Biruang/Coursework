import React, { Component } from 'react';
import { connect } from 'react-redux';
import Purpouses from '../components/purpouses.jsx';
import Lists from '../components/lists.jsx';
import { getLists, getPurposes } from '../actions/sidebar.js';

class Sidebar extends Component {
	render() {
		let lists, purp;

		if (this.props.lists == null) {
			this.props.getListsAction();
			lists = <Lists loading={true} />;
		} else {
			<Lists lists={this.props.lists} loading={this.props.listLoading} />;
		}

		if (this.props.purposes == null) {
			this.props.getPurpAction();
			purp = <Purpouses loading={true} />;
		} else {
			purp = (
				<Purpouses
					purposes={this.props.purposes}
					loading={this.props.purposeLoading}
				/>
			);
		}

		return (
			<React.Fragment>
				<div>
					<button className="btn" data-toggle="collapse" href="#purpouses">
						Цели:
					</button>
					<div className="show" id="purpouses">
						{purp}
					</div>
				</div>
				<div>
					<button className="btn" data-toggle="collapse" href="#lists">
						Списки:
					</button>
					<div className="collapse" id="lists">
						{lists}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = store => {
	return {
		lists: store.sidebar.lists,
		purposes: store.sidebar.purposes,
		listLoading: store.sidebar.listLoading,
		purposeLoading: store.sidebar.purposeLoading,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getListsAction: () => dispatch(getLists()),
		getPurpAction: () => dispatch(getPurposes()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Sidebar);
