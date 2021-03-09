import { createStore, combineReducers, applyMiddleware } from "redux";
import loginReduces from ".././store/dataLogin/reduces";
import thunk from "redux-thunk";

const reducers = combineReducers({
  loginReduces: loginReduces,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
