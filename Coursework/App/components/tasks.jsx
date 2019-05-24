import React, { Component } from 'react';

class Tasks extends Component {
	render() {
		let body;
		if (this.props.loading == true) {
			body = (
				<div class="spinner-border" role="status">
					<span class="sr-only">Loading...</span>
				</div>
			);
		} else {
			body = this.props.tasks.map((task, index) => {
				return (
					<tr key={task.id}>
						<th scope="row">{index + 1}</th>
						<td>{task.name}</td>
						<td>{task.creationTime}</td>
						<td>
							<input type="checkbox" />
						</td>
					</tr>
				);
			});
		}
		return (
			<table className="table table-hover">
				<thead>
					<th scope="col">#</th>
					<th scope="col">Имя</th>
					<th scope="col">Дата создания</th>
					<th scope="col">
						<input type="checkbox" />
					</th>
				</thead>
				<tbody>{body}</tbody>
			</table>
		);
	}
}

export default Tasks;
