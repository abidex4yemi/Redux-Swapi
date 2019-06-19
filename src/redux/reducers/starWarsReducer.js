import { FETCHING, SUCCESS, FAILURE } from '../actions';
const initialState = {
	characters: [],
	fetching: false,
	errors: {}
};
export const charsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SUCCESS:
			return {
				...state,
				fetching: action.payload.fetching,
				characters: [...action.payload.data]
			};
		case FETCHING:
			return {
				...state,
				fetching: action.payload
			};
		case FAILURE:
			return {
				...state,
				errors: action.payload.message,
				fetching: action.payload
			};
		default:
			return state;
	}
};
