import /* we need our action types here*/ '../actions';
const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  isFetching: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  console.log('reducer', action);
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
        isFetching: false,
        characters: action.payload
      };
    case FETCH_CHARACTERS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: 'asd'
      };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
