const initialState = {
  smurfs: [],
  isLoading: false,
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...state,
        isLoading: true
      };
    case SEE_SMURFS:
      return {
        ...state,
        smurfs: action.payload.data,
        isLoading: false
      };
    case ERR_SMURFS:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: action.payload.data
      };
    default:
      return state;
  }
};
