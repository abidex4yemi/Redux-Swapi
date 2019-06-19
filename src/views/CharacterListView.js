import React from 'react';
import { connect } from 'react-redux';
import { CharacterList } from '../components';
import { fetchCharacters } from '../redux/actions';

class CharacterListView extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchCharacters();
	}

	render() {
		const { characters, fetching } = this.props;
		if (fetching) {
			return <div>Fetching data....</div>;
		}
		return (
			<div className="CharactersList_wrapper">
				<CharacterList characters={characters} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		characters: state.charsReducer.characters,
		fetching: state.charsReducer.fetching
	};
};

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mapStateToProps, { fetchCharacters })(CharacterListView);
