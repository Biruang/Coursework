export const GET_TASKS_REQUEST = 'GET_TASKS_REQUEST';
export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS';
export const GET_TASKS_ERROR = 'GET_TASKS_ERROR';

export function getTasks() {
	return dispatch => {
		dispatch({
			type: GET_TASKS_REQUEST,
			payload: '',
		});

		fetch('api/tasks')
			.then(response => {
				return response.json();
			})
			.then(response => {
				dispatch({
					type: GET_TASKS_SUCCESS,
					payload: response,
				});
			})
			.catch(exc => {
				dispatch({
					type: GET_TASKS_ERROR,
					payload: exc,
				});
			});
	};
}

export function getTasksByList(id) {
	return dispatch => {
		dispatch({
			type: GET_TASKS_REQUEST,
			payload: '',
		});

		fetch('api/taskLists/' + id + '/tasks')
			.then(response => {
				return response.json();
			})
			.then(response => {
				dispatch({
					type: GET_TASKS_SUCCESS,
					payload: response,
				});
			})
			.catch(exc => {
				dispatch({
					type: GET_TASKS_ERROR,
					payload: exc,
				});
			});
	};
}

export function getTasksByPurpose(id) {
	return dispatch => {
		dispatch({
			type: GET_TASKS_REQUEST,
			payload: '',
		});

		fetch('api/purposes/' + id + '/tasks')
			.then(response => {
				return response.json();
			})
			.then(response => {
				dispatch({
					type: GET_TASKS_SUCCESS,
					payload: response,
				});
			})
			.catch(exc => {
				dispatch({
					type: GET_TASKS_ERROR,
					payload: exc,
				});
			});
	};
}
