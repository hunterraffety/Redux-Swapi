import { FETCHING, SUCCESS, FAILURE } from '../actions';

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
    case FETCHING:
      return {
        ...state,
        error: '',
        isFetching: true
      };
    case SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isFetching: false
      };
    case FAILURE:
      return {
        ...state,
        error: 'asd',
        isFetching: false
      };
    default:
      return state;
  }
};
