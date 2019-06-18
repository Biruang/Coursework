import React from 'react';
import { connect } from 'react-redux';
import { getTaskLists } from '../../actions/taskListsActions';
import { getPurposes } from '../../actions/purposeActions';
import { getTasksByList, getTasksByPurpose } from '../../actions/taskActions';
import List from '../../components/List/list';
import './sidebar.css';

class Sidebar extends React.Component {
	componentDidMount() {
		this.props.getTaskLists();
		this.props.getPurposes();
	}

	render() {
		const { taskLists, purposes } = this.props;
		return (
			<div className="card rounded-0 h-100">
				<div className="card-body">
					<List
						name="Task lists"
						list={taskLists.lists}
						isOpen
						isLoading={taskLists.isLoading}
						clickFunction={this.props.getTasksByList}
					/>
					<List
						name="Purposes"
						list={purposes.purposes}
						isLoading={taskLists.isLoading}
						clickFunction={this.props.getTasksByPurpose}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = store => {
	return {
		taskLists: store.taskLists,
		purposes: store.purposes,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getTaskLists: () => dispatch(getTaskLists()),
		getPurposes: () => dispatch(getPurposes()),
		getTasksByList: id => dispatch(getTasksByList(id)),
		getTasksByPurpose: id => dispatch(getTasksByPurpose(id)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Sidebar);
