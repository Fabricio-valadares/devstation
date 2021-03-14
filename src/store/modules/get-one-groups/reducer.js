import { GET_ONE_GROUP } from "./actionsTypes";

const oneGroupReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ONE_GROUP:
      const { group } = action;
      return group;

    default:
      return state;
  }
};

export default oneGroupReducer;
