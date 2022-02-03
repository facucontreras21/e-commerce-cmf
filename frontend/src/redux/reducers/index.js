import { combineReducers } from "redux";
import { productByIdReducer, productListReducer, productListTopReducer } from "./productReducers";
import { userLoginReducer } from "./userReducers";

const reducer = combineReducers({
  productList: productListReducer,
  userLogged: userLoginReducer,
  productListTopRanking: productListTopReducer, // productListTop
  productFoundById: productByIdReducer
});

export default reducer;
