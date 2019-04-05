import React, { Component } from 'react';

class Tasks extends Component {
	render() {
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
				<tbody>
					{this.props.tasks.map((task, index) => {
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
					})}
				</tbody>
			</table>
		);
	}
}

export default Tasks;
