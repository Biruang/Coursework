import {
	GET_PURPOSE_REQUEST,
	GET_PURPOSE_SUCCESS,
	GET_PURPOSE_EXCEPTION,
} from '../actions/purposeActions';

const initialState = {
	purposes: [
		{
			id: 1,
			name: 'testPurpose',
			creationTime: '2019-05-14T20:18:02.4212122',
			description: null,
		},
	],
	isLoading: false,
	errors: [],
};

export function purposesReducer(state = initialState, action) {
	switch (action.type) {
		case GET_PURPOSE_REQUEST:
			return { ...state, isLoading: true };
		case GET_PURPOSE_SUCCESS:
			return { ...state, isLoading: false, lists: action.payload };
		case GET_PURPOSE_EXCEPTION:
			return { ...state, isLoading: false, errors: action.payload };
		default:
			return state;
	}
}
