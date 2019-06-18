import React from 'react';
import './taskTable.css';

const optionsDay = {
	month: 'long',
	day: 'numeric',
};

const optionsDayPlusYear = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
};

const optionsTime = {
	timezone: 'UTC',
	hour: 'numeric',
	minute: 'numeric',
	second: 'numeric',
};

class TaskTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
		};
	}

	render() {
		var tasks = this.props.tasks.map(task => {
			var date = new Date(Date.parse(task.creationTime));
			var now = new Date();
			var serializedDate = date.toLocaleString('ru', optionsTime);
			if (date.getDay() !== now.getDate()) {
				serializedDate = date.toLocaleString('ru', optionsDay);
			}
			if (date.getFullYear() !== now.getFullYear()) {
				serializedDate = date.toLocaleString('ru', optionsDayPlusYear);
			}
			return (
				<tr key={task.id}>
					<td>
						<input
							onChange={() => {
								this.props.selectTask(task.id);
							}}
							type="checkbox"
						/>
					</td>
					<td>{task.name}</td>
					<td>
						{task.taskLists.map(list => {
							return <div key={list.id}>{list.name}</div>;
						})}
					</td>
					<td>{serializedDate}</td>
				</tr>
			);
		});

		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th scope="col">
							<input type="checkbox" />
						</th>
						<th scope="col">Название</th>
						<th scope="col">Список</th>
						<th scope="col">Дата создания</th>
					</tr>
				</thead>
				<tbody className="">{tasks}</tbody>
			</table>
		);
	}
}

export default TaskTable;
