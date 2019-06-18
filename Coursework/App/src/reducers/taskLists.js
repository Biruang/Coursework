import {
	GET_TASK_LISTS_REQUEST,
	GET_TASK_LISTS_SUCCESS,
	GET_TASK_LISTS_EXCEPTION,
} from '../actions/taskListsActions';

const initialState = {
	lists: [
		{
			id: 1,
			name: 'testTaskList',
			color: 'red',
		},
	],
	isLoading: false,
	errors: [],
};

export function taskListsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_TASK_LISTS_REQUEST:
			return { ...state, isLoading: true };
		case GET_TASK_LISTS_SUCCESS:
			return { ...state, isLoading: false, lists: action.payload };
		case GET_TASK_LISTS_EXCEPTION:
			return { ...state, isLoading: false, errors: action.payload };
		default:
			return state;
	}
}
