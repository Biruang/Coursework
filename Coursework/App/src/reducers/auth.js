import {
	CHECK_LOGIN_REQUEST,
	CHECK_LOGIN_SUCCESS,
	CHECK_LOGIN_ERROR,
} from '../actions/auth';

const initialState = {
	isLogged: false,
	isLoading: false,
	token: '',
	errors: [],
};

export function authReducer(state = initialState, action) {
	switch (action.type) {
		case CHECK_LOGIN_REQUEST:
			return { ...state, isLoading: true };
		case CHECK_LOGIN_SUCCESS:
			return {
				...state,
				isLoading: false,
				isLogged: true,
				token: action.payload,
			};
		case CHECK_LOGIN_ERROR:
			return { ...state, isLoading: false, errors: action.payload };
		default:
			return state;
	}
}
