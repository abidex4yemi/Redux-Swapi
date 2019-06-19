import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const ADD_CHARACTERS = 'ADD_CHARACTERS';

export const addCharacters = characters => {
	return {
		type: ADD_CHARACTERS,
		payload: characters
	};
};

export const fetchCharacters = () => dispatch => {
	axios
		.get('https://swapi.co/api/people/')
		.then(res => {
			dispatch(addCharacters(res.data));
		})
		.catch(error => error);
};
