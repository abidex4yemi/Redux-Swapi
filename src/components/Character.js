import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ character }) => {
	return <li>{character.name}</li>;
};

export default Character;

Character.propTypes = {
	character: PropTypes.object.isRequired
};
