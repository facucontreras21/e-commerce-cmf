import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers";

const userStorage = localStorage.getItem("data")
  ? JSON.parse(localStorage.getItem("data"))
  : null;

const initialState = {
  userLogged: { userFound: userStorage },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
