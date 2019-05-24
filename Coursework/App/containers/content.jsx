import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tasks from '../components/tasks.jsx';
import { getTasks } from '../actions/content.js';

class Content extends Component {
	render() {
		if (this.props.tasks == null) {
			this.props.getTasksAction();
			return <Tasks loading={true} />;
		}
		return <Tasks tasks={this.props.tasks} loading={this.props.loading} />;
	}
}

const mapStateToProps = store => {
	return {
		list: store.content.list,
		purpouse: store.content.purpouse,
		tasks: store.content.tasks,
		loading: store.content.loading,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getTasksAction: () => dispatch(getTasks()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Content);
