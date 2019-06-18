import React from 'react';

const options = {
	month: 'long',
	day: 'numeric',
	year: 'numeric',
	timezone: 'UTC',
	hour: 'numeric',
	minute: 'numeric',
};

class Task extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		var task = this.props.task;
		var creatonTime = new Date(task.creationTime);
		return (
			<div className="card rounded-0 h-100">
				<div className="card-body">
					<p>
						<span className="h5 pr-2">{task.name}</span>
					</p>
					<p>
						<span className="h5 pr-2">Дата создания: </span>
						{isFinite(creatonTime)
							? creatonTime.toLocaleString('ru', options)
							: null}
					</p>
					<p>
						<span className="h5 pr-2">Напоминания: </span>
						{!isFinite(task.reminders)
							? task.reminders.map(reminder => {
									var triggerTime = new Date(reminder.triggerTime);
									return (
										<span key={reminder.id}>
											{triggerTime.toLocaleString('ru', options)}
										</span>
									);
							  })
							: null}
					</p>
					<p>
						<span className="h5 pr-2">Цель: </span>
						{!isFinite(task.purpouse) ? task.purpouse.name : null}
					</p>
					<p>
						<span className="h5 pr-2">Списки: </span>
						{!isFinite(task.taskLists)
							? task.taskLists.map(list => {
									return <span key={list.id}>{list.name}</span>;
							  })
							: null}
					</p>
					<p>
						<span className="h5 pr-2">Описание: </span>
						{task.description}
					</p>
				</div>
			</div>
		);
	}
}

export default Task;
