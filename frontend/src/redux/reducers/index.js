import { combineReducers } from "redux";
import { productListReducer, productListTopReducer } from "./productReducers";
import { userLoginReducer } from "./userReducers";

const reducer = combineReducers({
  productList: productListReducer,
  userLogged: userLoginReducer,
  productListTopRanking: productListTopReducer, // productListTop
});

export default reducer;
