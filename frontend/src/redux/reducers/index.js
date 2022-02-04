import { combineReducers } from "redux";
import {
  productByIdReducer,
  productListReducer,
  productListTopReducer,
} from "./productReducers";
import { createReviewReducer } from "./product/productReducer";
import { signInReducer, logoutReducer } from "./user/userAuthReducer";

const reducer = combineReducers({
  productList: productListReducer,
  productListTopRanking: productListTopReducer,
  productFoundById: productByIdReducer,

  userLogged: signInReducer,
  userLogout: logoutReducer,
  reviewCreated: createReviewReducer,
});

export default reducer;
