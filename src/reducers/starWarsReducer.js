import { FETCHING } from '../actions';
import { SUCCESS } from '../actions';
import { FAILURE } from '../actions';

const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  error: null,
  isFetching: false
};

export const charsReducer = (state = initialState, action) => {
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
        characters: [...state.characters, ...action.payload],
        error: '',
        isFetching: false
      };
    case FAILURE:
      return {
        ...state,
        error: 'Error',
        isFetching: false
      };
    default:
      return state;
  }
};
