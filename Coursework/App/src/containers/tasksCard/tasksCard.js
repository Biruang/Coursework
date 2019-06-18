import React from 'react';
import { connect } from 'react-redux';
import './tasksCard.css';
import TaskTable from '../../components/TaskTable/taskTable';
import TasksControl from '../../components/TasksControl/tasksControl';

class TasksCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 'active',
			selected: this.props.selected,
		};
	}

	componentWillReceiveProps() {
		this.setState({
			selected: this.props.selected,
		});
	}

	render() {
		const { tasks } = this.props;
		var tsk = [];
		if (this.state.page === 'active') {
			tasks.tasks.forEach(task => {
				if (task.completed === false) tsk.push(task);
			});
		}
		if (this.state.page === 'completed') {
			tasks.tasks.forEach(task => {
				if (task.completed === true) tsk.push(task);
			});
		}

		return (
			<div className="card rounded-0 h-100">
				<div className="card-header">
					<ul className="nav nav-tabs card-header-tabs">
						<li className="nav-item">
							<button
								className="nav-link active"
								onClick={() => {
									this.setState({ page: 'active' });
								}}
							>
								Активные
							</button>
						</li>
						<li className="nav-item">
							<button
								className="nav-link active"
								onClick={() => {
									this.setState({ page: 'completed' });
								}}
							>
								Выполненые
							</button>
						</li>
					</ul>
				</div>
				<div className="card-body">
					<TasksControl selected={this.props.selected} />
					<TaskTable tasks={tsk} selectTask={this.props.selectTask} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = store => {
	return {
		tasks: store.tasks,
	};
};

const mapDispatchToProps = dispatch => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TasksCard);
