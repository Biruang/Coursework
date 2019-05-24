export const GET_LISTS_REQUEST = 'GET_LISTS_REQUEST';
export const GET_LISTS_SUCCESS = 'GET_LISTS_SUCCESS';
export const GET_LISTS_EXCEPTION = 'GET_LISTS_EXCEPTION';
export const GET_PURPOSES_REQUEST = 'GET_PURPOUSES_REQUEST';
export const GET_PURPOSES_SUCCESS = 'GET_PURPOUSES_SUCCESS';
export const GET_PURPOSES_EXCEPTION = 'GET_PURPOUSES_EXCEPTION';

export function getLists() {
	return dispatch => {
		dispatch({
			type: GET_LISTS_SUCCESS,
			payload: [],
		});
		fetch('/api/taskLists')
			.then(response => {
				return response.json();
			})
			.then(response => {
				dispatch({
					type: GET_LISTS_SUCCESS,
					payload: response,
				});
			})
			.catch(exc => {
				dispatch({
					type: GET_LISTS_EXCEPTION,
					payload: exc,
				});
			});
	};
}

export function getPurposes() {
	return dispatch => {
		dispatch({
			type: GET_PURPOSES_SUCCESS,
			payload: [],
		});
		fetch('/api/purposes')
			.then(response => {
				return response.json();
			})
			.then(response => {
				dispatch({
					type: GET_PURPOSES_SUCCESS,
					payload: response,
				});
			})
			.catch(exc => {
				dispatch({
					type: GET_PURPOSES_EXCEPTION,
					payload: exc,
				});
			});
	};
}
