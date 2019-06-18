import { combineReducers } from 'redux';
import { tasksReducer } from './tasks';
import { taskListsReducer } from './taskLists';
import { purposesReducer } from './purposes';
import { authReducer } from './auth';

export const rootReducer = combineReducers({
	tasks: tasksReducer,
	taskLists: taskListsReducer,
	purposes: purposesReducer,
	auth: authReducer,
});
