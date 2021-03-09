import { createStore, combineReducers, applyMiddleware } from "redux";
import loginReduces from "../store/dataLogin/reduces";
import thunk from "redux-thunk";
import usersReducer from "./modules/get-users/reducer";

const reducers = combineReducers({
  loginReduces: loginReduces,
  users: usersReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
