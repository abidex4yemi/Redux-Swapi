import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Character from './Character';

const CharacterList = props => {
	return (
		<CharacterListStyled>
			{props.characters.map(character => {
				return <Character key={character.name} character={character} />;
			})}
		</CharacterListStyled>
	);
};

export default CharacterList;

CharacterList.propTypes = {
	props: PropTypes.arrayOf(PropTypes.object)
};

const CharacterListStyled = styled.div`
	margin: 0;
	padding: 0;
	list-style: none;
`;
