import React from 'react';
import '../tasksControl.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';

class TagsButton extends React.Component {
	render() {
		return (
			<div className="btn-group">
				<button
					id="btnGroupDrop3"
					type="button"
					className="btn btn-secondary dropdown-toggle"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					<FontAwesomeIcon icon={faTags} />
				</button>
				<div className="dropdown-menu">
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

export default TagsButton;
