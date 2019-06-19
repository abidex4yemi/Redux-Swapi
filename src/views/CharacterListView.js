import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CharacterList } from '../components';
import { fetchCharacters } from '../redux/actions';

const CharacterListView = props => {
	const { characters, fetching, fetchCharacters } = props;

	useEffect(() => {
		fetchCharacters();
	}, []);

	return (
		<div className="CharactersList_wrapper">
			{fetching ? <div>Fetching data....</div> : <CharacterList characters={characters} />}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		characters: state.charsReducer.characters,
		fetching: state.charsReducer.fetching
	};
};

export default connect(mapStateToProps, { fetchCharacters })(CharacterListView);

CharacterListView.propTypes = {
	characters: PropTypes.array.isRequired,
	fetching: PropTypes.bool.isRequired,
	fetchCharacters: PropTypes.func.isRequired
};
