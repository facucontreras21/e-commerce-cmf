import actionTypes from "../../actions/actionTypes";

export const createReviewReducer = (state = { mewreview: {} }, action) => {
  switch (action.type) {
    case actionTypes.TYPE_REQUEST:
      return { loading: true, mewreview: {} };
    case actionTypes.TYPE_SUCCESS:
      return {
        loading: false,
        mewreview: action.payload,
      };

    case actionTypes.TYPE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
