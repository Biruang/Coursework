import React from 'react';
import '../tasksControl.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

class PriorityButton extends React.Component {
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
					<FontAwesomeIcon icon={faExclamation} />
				</button>
				<div className="dropdown-menu">
					<button className="dropdown-item" type="button">
						Высокий приоритет
					</button>
					<button className="dropdown-item" type="button">
						Средний приоритет
					</button>
					<button className="dropdown-item" type="button">
						Низкий приоритет
					</button>
				</div>
			</div>
		);
	}
}

export default PriorityButton;
