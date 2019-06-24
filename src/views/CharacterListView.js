// dependencies
import React from 'react';
import { connect } from 'react-redux';

// components
import { CharacterList } from '../components';

// import actions
import { getChars } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getChars();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      console.log(`you're an idiot`);
      return <h2>ok</h2>;
    }
    return (
      <div className='CharactersList_wrapper'>
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isFetching: state.charsReducer.isFetching
});

// const mapStateToProps = state => {
//   console.log(state);
// };

// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { getChars }
)(CharacterListView);
