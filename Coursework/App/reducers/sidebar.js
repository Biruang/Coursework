import {
	GET_LISTS_REQUEST,
	GET_LISTS_SUCCESS,
	GET_LISTS_EXCEPTION,
	GET_PURPOSES_REQUEST,
	GET_PURPOSES_SUCCESS,
} from '../actions/sidebar.js';

const initialState = {
	lists: null,
	purposes: null,
	listLoading: false,
	purposeLoading: false,
};

export function sidebarReducer(state = initialState, action) {
	switch (action.type) {
		case GET_LISTS_REQUEST:
			return { ...state, listLoading: true };
		case GET_LISTS_SUCCESS:
			return { ...state, lists: action.payload, listLoading: false };
		case GET_PURPOSES_REQUEST:
			return { ...state, purposeLoading: true };
		case GET_PURPOSES_SUCCESS:
			return { ...state, purposes: action.payload, purposeLoading: false };
		default:
			return state;
	}
}
