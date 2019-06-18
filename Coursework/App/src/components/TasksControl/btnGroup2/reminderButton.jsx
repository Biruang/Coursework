import React from 'react';
import '../tasksControl.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';

class ReminderButton extends React.Component {
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
					<FontAwesomeIcon icon={faCalendarDay} />
				</button>
				<div className="dropdown-menu">
					<button className="dropdown-item" type="button">
						Выпадающая ссылка
					</button>
					<button className="dropdown-item" type="button">
						Выпадающая ссылка
					</button>
					<button className="dropdown-item" type="button">
						Выпадающая ссылка
					</button>
					<button className="dropdown-item" type="button">
						Выпадающая ссылка
					</button>
					<button className="dropdown-item" type="button">
						Выпадающая ссылка
					</button>
				</div>
			</div>
		);
	}
}

export default ReminderButton;
