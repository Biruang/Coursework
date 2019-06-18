export const GET_PURPOSE_REQUEST = 'GET_PURPOSE_REQUEST';
export const GET_PURPOSE_SUCCESS = 'GET_PURPOSE_SUCCESS';
export const GET_PURPOSE_EXCEPTION = 'GET_PURPOSE_EXCEPTION';

export function getPurposes() {
	return dispatch => {
		dispatch({
			type: GET_PURPOSE_REQUEST,
			payload: '',
		});

		fetch('api/purposes')
			.then(response => {
				return response.json();
			})
			.then(response => {
				dispatch({
					type: GET_PURPOSE_SUCCESS,
					payload: response,
				});
			})
			.catch(exc => {
				dispatch({
					type: GET_PURPOSE_EXCEPTION,
					payload: exc,
				});
			});
	};
}
