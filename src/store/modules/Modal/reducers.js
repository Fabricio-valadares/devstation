import { OPEN_MODAL } from "./actionsType";

const openModalReducers = (state = false, actions) => {
  switch (actions.type) {
    case OPEN_MODAL:
      return actions.open;
    default:
      return state;
  }
};

export default openModalReducers;
