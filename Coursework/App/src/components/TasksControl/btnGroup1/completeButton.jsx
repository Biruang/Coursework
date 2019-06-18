import React from 'react';
import '../tasksControl.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

class CompleteButton extends React.Component {
	render() {
		return (
			<button type="button" className="btn btn-secondary">
				<FontAwesomeIcon icon={faCheck} />
			</button>
		);
	}
}

export default CompleteButton;
