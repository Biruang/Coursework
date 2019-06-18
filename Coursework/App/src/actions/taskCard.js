export const SELECT_TASK = 'SELECT_TASK';

export function selectTask(taskId) {
	return {
		type: SELECT_TASK,
		payload: taskId,
	};
}
