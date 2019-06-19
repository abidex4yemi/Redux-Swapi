import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Character = ({ character }) => {
	return <CharacterStyled>{character.name}</CharacterStyled>;
};

export default Character;

Character.propTypes = {
	character: PropTypes.object.isRequired
};

const CharacterStyled = styled.li`
	width: 400px;
	height: 50px;
	margin-bottom: 10px;
	background: #7d5bbe;
	color: #fff;
	text-align: center;
	padding: 10px;
	box-sizing: border-box;
`;
