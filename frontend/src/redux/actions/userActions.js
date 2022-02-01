import actionTypes from "./actionTypes";
import { loginUsers } from "../../services/userServices";

export const loginUser = (body) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.USER_LOGIN_REQUEST });
      const data = await loginUsers(body);
      dispatch({
        type: actionTypes.USER_LOGIN_SUCCESS,
        payload: data,
      });
      localStorage.setItem("data", JSON.stringify(data));
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
