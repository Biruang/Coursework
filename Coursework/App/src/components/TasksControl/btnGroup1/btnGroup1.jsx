import React from 'react';
import '../tasksControl.css';
import PostponeButton from './postponeButton';
import CompleteButton from './completeButton';

class BtnGroup1 extends React.Component {
	render() {
		return (
			<div className="btn-group pr-2">
				<CompleteButton />
				<PostponeButton />
			</div>
		);
	}
}

export default BtnGroup1;
