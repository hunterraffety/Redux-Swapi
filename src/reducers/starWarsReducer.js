import {
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR
} from '../actions';

const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  error: null,
  isFetching: false
};

export const charsReducer = (state = initialState, action) => {
  console.log(`starWarsReducer`, action);
  console.log(`state from reducer`, state);
  // Fill me in with the important reducers
  // action types should be FETCHING, SUCCESS and FAILURE
  // your switch statement should handle all of these cases.
  switch (action.type) {
    case FETCH_CHARACTERS_START:
      return {
        ...state,
        error: '',
        isFetching: true
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isFetching: false
      };
    case FETCH_CHARACTERS_ERROR:
      return {
        ...state,
        error: 'asd',
        isFetching: false
      };
    default:
      return state;
  }
};
