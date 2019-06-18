import { SELECT_TASK } from '../actions/taskCard';
import {
	GET_TASKS_REQUEST,
	GET_TASKS_SUCCESS,
	GET_TASKS_ERROR,
} from '../actions/taskActions';

const initialState = {
	tasks: [
		{
			id: 1,
			name: 'testTask',
			description: 'dddddddddddddddddddddddddd',
			completed: false,
			creationTime: '2019-05-14T20:18:02.4023759',
			purpouse: null,
			reminders: [],
			taskLists: [
				{
					id: 1,
					name: 'testTaskList',
					color: 'red',
				},
			],
		},
	],
	selected: [],
	loading: false,
	errors: [],
};

export function tasksReducer(state = initialState, action) {
	switch (action.type) {
		case GET_TASKS_REQUEST:
			return { ...state, loading: true };
		case GET_TASKS_SUCCESS:
			return { ...state, loading: false, tasks: action.payload };
		case GET_TASKS_ERROR:
			return { ...state, loading: false, errors: action.payload };
		case SELECT_TASK: {
			return { ...state, selected: state.selected.push(action.payload) };
		}
		default:
			return state;
	}
}
