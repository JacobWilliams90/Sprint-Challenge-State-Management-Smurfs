import axios from "axios";

export const GET_SMURF = "GET_SMURF";
export const SEE_SMURF = "SEE_SMURF";
export const ERR_SMURF = "ERR_SMURF";

export const ADD_SMURF_START = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURF });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res);
      dispatch({
        type: SEE_SMURF,
        payload: res
      });
    })
    .catch(err => {
      dispatch({ type: ERR_SMURF, payload: err });
    });
};

export const addSmurf = smurf => dispatch => {
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      console.log(res);
      dispatch({
        type: ADD_SMURF_SUCCESS,
        payload: res
      });
    })
    .catch(err => console.log(err));
};
