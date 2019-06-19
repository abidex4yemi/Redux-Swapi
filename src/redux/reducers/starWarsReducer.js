import { FETCHING, SUCCESS, FAILURE, ADD_CHARACTERS } from '../actions';
const initialState = {
	characters: [],
	fetching: false
};
export const charsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CHARACTERS:
			return {
				...state,
				characters: [...action.payload.results]
			};
		default:
			return state;
	}
};
