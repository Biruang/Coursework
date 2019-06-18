import React from 'react';
import '../tasksControl.css';
import PriorityButton from './priorityButton';
import ReminderButton from './reminderButton';
import TagsButton from './tagsButton';

class BtnGroup2 extends React.Component {
	render() {
		return (
			<div className="btn-group pr-2">
				<PriorityButton />
				<ReminderButton />
				<TagsButton />
			</div>
		);
	}
}

export default BtnGroup2;
