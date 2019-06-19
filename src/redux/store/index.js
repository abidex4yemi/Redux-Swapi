import { createStore } from 'redux';
import rootReducer from '../reducers';

// needed dependancies
// applyMiddleware from redux
// thunk from redux-thunk
// logger from redux-logger
// rootReducer from ./reducers

export const store = createStore(
	rootReducer
	/* applyMiddleware goes here */
);
