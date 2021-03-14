import { createStore, combineReducers, applyMiddleware } from "redux";
import loginReduces from "./modules/dataLogin/reduces";
import usersReducer from "./modules/get-users/reducer";
import groupsReduces from "./modules/groups/reduces";
import thunk from "redux-thunk";
import setUserReducers from "./modules/User/reducers";
import openModalReducers from "./modules/Modal/reducers";

const reducers = combineReducers({
  loginReduces: loginReduces,
  groupsReduces: groupsReduces,
  users: usersReducer,
  user: setUserReducers,
  open: openModalReducers,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
