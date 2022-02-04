import actionTypes from "../../actions/actionTypes";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export const signInReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.TYPE_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
      };
    case actionTypes.TYPE_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload,
      };
    case actionTypes.TYPE_FAIL:
      return {
        isLoggedIn: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const logoutReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case type.TYPE_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};
