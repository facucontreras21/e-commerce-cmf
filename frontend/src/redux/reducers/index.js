import { combineReducers } from "redux";
import { productListReducer } from "./productReducers";
import { userLoginReducer } from "./userReducers";

const reducer = combineReducers({
  productList: productListReducer,
  userLogged: userLoginReducer, 
});

export default reducer;
