import React from 'react';
import { connect } from 'react-redux';
import TasksCard from '../../containers/tasksCard/tasksCard';
import Task from '../../components/Task/task';
import { getTasks } from '../../actions/taskActions';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: [],
		};
		this.selectTask = this.selectTask.bind(this);
	}
	componentDidMount() {
		this.props.getTasks();
	}

	selectTask(id) {
		var arr = this.state.selected;
		var flag = false;
		for (var i = 0; i <= arr.length; i++) {
			if (arr[i] === id) {
				arr.splice(i, 1);
				flag = true;
			}
		}
		if (flag === false) {
			arr = arr.concat(id);
		}
		this.setState({
			selected: arr,
		});
		console.log(arr);
	}

	render() {
		const { tasks } = this.props;
		var aside;
		if (this.state.selected.length === 0) {
			aside = <p>None</p>;
		}
		if (this.state.selected.length === 1) {
			var task;
			tasks.tasks.forEach(t => {
				if (t.id === this.state.selected[0]) {
					task = t;
				}
			});
			aside = <Task task={task} />;
		}
		if (this.state.selected.length > 1) {
			aside = <p>{this.state.selected.length}</p>;
			console.log(aside);
		}

		return (
			<div className="container-fluid h-100 tasks">
				<div className="row h-100">
					<div className="col-lg-7 col-sm-12 p-0">
						<TasksCard
							selectTask={this.selectTask}
							selected={this.state.selected}
						/>
					</div>
					<div className="col-5 p-0">
						<span>{aside}</span>
					</div>
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
	return {
		getTasks: () => dispatch(getTasks()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main);
