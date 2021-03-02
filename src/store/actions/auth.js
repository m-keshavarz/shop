import * as actionTypes from "../actionTypes/auth";
import axios from "../../config/axios";
// import { toast } from "react-toastify";

const loading = () => ({ type: actionTypes.AUTH_START });

const success = (result) => ({
  type: actionTypes.AUTH_SUCCESS,
  result
});

const fail = (error) => ({
  type: actionTypes.AUTH_FAIL,
  error
});

export const registerUser = (data, callback) => {
  return (dispatch) => {
    dispatch(loading());
    axios
      .post("/register", data)
      .then((res) => {
        dispatch(success(res.data));
        callback && callback.onSuccess && callback.onSuccess(data.name);
      })
      .catch((err) => {
        dispatch(fail(err));
        callback && callback.onError && callback.onError(err);
      });
  };
};
