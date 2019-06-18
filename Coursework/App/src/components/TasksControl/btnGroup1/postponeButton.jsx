import React from 'react';
import '../tasksControl.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';

class PostponeButton extends React.Component {
	render() {
		return (
			<div className="btn-group">
				<button
					id="btnGroupDrop2"
					type="button"
					className="btn btn-secondary dropdown-toggle"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					<FontAwesomeIcon icon={faCalendarPlus} />
				</button>
				<div className="dropdown-menu">
					<p className="">Отложить задачу:</p>
					<button className="dropdown-item" type="button">
						1 день
					</button>
					<button className="dropdown-item" type="button">
						2 дня
					</button>
					<button className="dropdown-item" type="button">
						3 дня
					</button>
					<button className="dropdown-item" type="button">
						1 неделю
					</button>
					<button className="dropdown-item" type="button">
						2 недели
					</button>
					<button className="dropdown-item" type="button">
						1 месяц
					</button>
				</div>
			</div>
		);
	}
}

export default PostponeButton;
