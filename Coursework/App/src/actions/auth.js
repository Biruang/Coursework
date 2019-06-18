export const CHECK_LOGIN_REQUEST = 'GET_PURPOSE_REQUEST';
export const CHECK_LOGIN_SUCCESS = 'GET_PURPOSE_SUCCESS';
export const CHECK_LOGIN_ERROR = 'GET_PURPOSE_EXCEPTION';

export function checkAuth() {
	return dispatch => {
		dispatch({
			type: CHECK_LOGIN_REQUEST,
			payload: '',
		});

		fetch('api/purposes')
			.then(response => {
				return response.json();
			})
			.then(response => {
				dispatch({
					type: CHECK_LOGIN_SUCCESS,
					payload: response,
				});
			})
			.catch(exc => {
				dispatch({
					type: CHECK_LOGIN_ERROR,
					payload: exc,
				});
			});
	};
}
