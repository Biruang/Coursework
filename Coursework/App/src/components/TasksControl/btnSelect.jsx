import React from 'react';
import './tasksControl.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';

class BtnSelect extends React.Component {
	render() {
		return (
			<div className="btn-group pr-2">
				<div className="btn-group">
					<button
						id="btnGroupDrop1"
						type="button"
						className="btn btn-secondary dropdown-toggle"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						<FontAwesomeIcon icon={faHashtag} />
					</button>
					<div className="dropdown-menu">
						<button className="dropdown-item" type="button">
							Все
						</button>
						<button className="dropdown-item" type="button">
							Ни одного
						</button>
						<hr />
						<button className="dropdown-item" type="button">
							На сегодня
						</button>
						<button className="dropdown-item" type="button">
							На завтра
						</button>
						<button className="dropdown-item" type="button">
							Просроченые
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default BtnSelect;
