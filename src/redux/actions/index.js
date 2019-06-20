import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const fetchCharacters = () => dispatch => {
	// trigger fetching
	dispatch({ type: FETCHING, payload: true });

	axios
		.get('https://swapi.co/api/people/')
		.then(res => {
			dispatch({
				type: SUCCESS,
				payload: {
					data: res.data.results,
					fetching: false
				}
			});
		})
		.catch(error => {
			// trigger failure
			dispatch({
				type: FAILURE,
				payload: {
					message: error.message,
					fetching: false
				}
			});
		});
};
