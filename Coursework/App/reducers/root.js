import { combineReducers } from 'redux';
import { contentReducer } from './content.js';
import { sidebarReducer } from './sidebar.js';
import { headerReducer } from './header.js';

export const rootReducer = combineReducers({
	content: contentReducer,
	sidebar: sidebarReducer,
	header: headerReducer,
});
