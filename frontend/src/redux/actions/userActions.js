import actionTypes from "./actionTypes";
import { loginUsers } from "../../services/userServices";

export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.USER_LOGIN_REQUEST });
      const data = await loginUsers(email, password);
      dispatch({
        type: actionTypes.USER_LOGIN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.mesaage
            : error.message,
      });
    }
  };
};
