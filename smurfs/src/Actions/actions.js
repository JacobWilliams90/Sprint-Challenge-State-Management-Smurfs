import axios from "axios";

export const GET_SMURFS = "GET_SMURFS";
export const SEE_SMURFS = "SEE_SMURFS";
export const ERR_SMURFS = "ERR_SMURFS";
export const ADD_SMURFS = "ADD_SMURFS";

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => dispatch({ type: SEE_SMURFS, payload: res.data }))
    .catch(err => dispatch({ type: ERR_SMURFS, payload: err }));
};

export const addSmurf = smurf => dispatch => {
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      dispatch({ type: ADD_SMURFS, payload: res });
    })
    .catch(err => console.log(err));
};
