import { openModal } from "./actions";

export const openModalThunk = (open) => (dispatch, state) => {
  dispatch(openModal(open));
};
