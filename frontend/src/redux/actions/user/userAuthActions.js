import actionTypes from "../actionTypes";
import {
  signInService,
  logoutService,
} from "../../../services/user/userService";

export const signInAction = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.TYPE_REQUEST });
      const data = await signInService(email, password);
      dispatch({
        type: actionTypes.TYPE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.TYPE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.mesaage
            : error.message,
      });
    }
  };
};

export const logoutAction = () => (dispatch) => {
  logoutService();

  dispatch({
    type: actionTypes.TYPE_LOGOUT,
  });
};
