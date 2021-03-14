import { SET_USER } from "./actionsType";

const setUserReducers = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user;

    default:
      return state;
  }
};

export default setUserReducers;
