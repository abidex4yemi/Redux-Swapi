import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = props => {
	return (
		<ul>
			{props.characters.map(character => {
				return <Character key={character.name} character={character} />;
			})}
		</ul>
	);
};

export default CharacterList;

CharacterList.propTypes = {
	props: PropTypes.arrayOf(PropTypes.object)
};
