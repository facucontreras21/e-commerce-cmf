import actionTypes from "../actions/actionTypes";

export const userLoginReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_REQUEST:
      return { loading: true };
    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        // pages: action.payload.pages,
        // page: action.payload.page,
      };
    case actionTypes.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
