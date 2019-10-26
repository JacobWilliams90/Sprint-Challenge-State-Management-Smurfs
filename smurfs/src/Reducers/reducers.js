import {
  GET_SMURF,
  SEE_SMURF,
  ERR_SMURF,
  ADD_SMURF_SUCCESS
} from "../actions/actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURF:
      return {
        ...state,
        isFetching: true
      };

    case SEE_SMURF:
      return {
        ...state,
        smurfs: action.payload.data,
        isFetching: false
      };

    case ERR_SMURF:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      };

    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload.data
      };
    default:
      return state;
  }
};
