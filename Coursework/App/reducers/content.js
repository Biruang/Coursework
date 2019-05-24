import {
	GET_TASK_SUCCESS,
	GET_TASK_EXCEPTION,
	GET_TASKS_REQUEST,
	getTasks,
} from '../actions/content.js';

const initialState = {
	list: '',
	purpouse: '',
	tasks: null,
	loading: false,
};

function init() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '/api/tasks', false);
	xhr.send();
	return JSON.parse(xhr.responseText);
}

export function contentReducer(state = initialState, action) {
	switch (action.type) {
		case GET_TASKS_REQUEST:
			return { ...state, loading: true };
		case GET_TASK_SUCCESS:
			return { ...state, tasks: action.payload, loading: false };
		default:
			return state;
	}
}
