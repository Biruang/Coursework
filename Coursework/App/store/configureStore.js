import { createStore } from 'redux';
import { rootReducer } from '../reducers/root.js';

export const store = createStore(rootReducer);
