export const GET_TASK_LISTS_REQUEST = 'GET_TASK_LISTS_REQUEST';
export const GET_TASK_LISTS_SUCCESS = 'GET_TASK_LISTS_SUCCESS';
export const GET_TASK_LISTS_EXCEPTION = 'GET_TASK_LISTS_EXCEPTION';

export function getTaskLists() {
	return dispatch => {
		dispatch({
			type: GET_TASK_LISTS_REQUEST,
			payload: '',
		});

		fetch('api/taskLists')
			.then(response => {
				return response.json();
			})
			.then(response => {
				dispatch({
					type: GET_TASK_LISTS_SUCCESS,
					payload: response,
				});
			})
			.catch(exc => {
				dispatch({
					type: GET_TASK_LISTS_EXCEPTION,
					payload: exc,
				});
			});
	};
}
