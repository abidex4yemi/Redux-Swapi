import React, { useEffect } from 'react';
import styled from 'styled-components';
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
		<CharacterListViewStyled>
			{fetching ? <div>Fetching data....</div> : <CharacterList characters={characters} />}
		</CharacterListViewStyled>
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

const CharacterListViewStyled = styled.div`
	padding-top: 100px;
	display: flex;
	justify-content: center;
`;
