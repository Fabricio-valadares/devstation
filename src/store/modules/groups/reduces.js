import { GET_GROUPS } from "./actionsType";

const groupsReduces = (state = {}, actions) => {
  switch (actions.type) {
    case GET_GROUPS:
      return actions.data;
    default:
      return state;
  }
};

export default groupsReduces;
