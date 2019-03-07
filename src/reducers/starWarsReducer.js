import /* we need our action types here*/ "../actions";
import { FETCHING, FETCHING_SUCCESS, FETCHING_FAILURE } from "../actions";



const initialState = {
  characters: [],
  fetching: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};


export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {
          fetching: true,
          characters: [],
          error: ''
      };


    case FETCHING_SUCCESS:
    return {
      fetching: false,
      characters: action.payload,
      error: ''
  };


    case FETCHING_FAILURE:
    return {
      fetching: false,
      characters: [],
      error: action.payload
  };


    default:
      return state;
  }
};
