import { GET_USERS_LIST } from "./actionsTypes";

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      const { list } = action;
      return [...list];

    default:
      return state;
  }
};

export default usersReducer;
