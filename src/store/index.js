import { createStore, combineReducers, applyMiddleware } from "redux";
import loginReduces from "./modules/dataLogin/reduces";
import usersReducer from "./modules/get-users/reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  loginReduces: loginReduces,
  users: usersReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
