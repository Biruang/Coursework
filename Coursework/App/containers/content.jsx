import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tasks from '../components/tasks.jsx';

class Content extends Component {
	render() {
		return <Tasks tasks={this.props.tasks} />;
	}
}

const mapStateToProps = store => {
	return {
		list: store.content.list,
		purpouse: store.content.purpouse,
		tasks: store.content.tasks,
	};
};

export default connect(mapStateToProps)(Content);
