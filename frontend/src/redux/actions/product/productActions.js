import actionTypes from "../actionTypes";
import { createReviewService } from "../../../services/review/reviewService";

export const createReviewAction = (token, body, id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.TYPE_REQUEST });
      const data = await createReviewService(token, body, id);
      dispatch({
        type: actionTypes.TYPE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.TYPE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};
