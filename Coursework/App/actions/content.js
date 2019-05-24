export const GET_TASKS_REQUEST = 'GET_TASKS_REQUEST';
export const GET_TASK_SUCCESS = 'GET_TASKS_SUCCESS';
export const GET_TASK_EXCEPTION = 'GET_TASKS_EXCEPTION';

export function getTasks() {
	return dispatch => {
		dispatch({
			type: GET_TASKS_REQUEST,
			payload: [],
		});
		fetch('/api/tasks')
			.then(response => {
				return response.json();
			})
			.then(response => {
				dispatch({
					type: GET_TASK_SUCCESS,
					payload: response,
				});
			})
			.catch(exc => {
				dispatch({
					type: GET_TASK_EXCEPTION,
					payload: exc,
				});
			});
	};
}
