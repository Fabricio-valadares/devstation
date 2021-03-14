import { openModal } from "./actions";

export const openModalThunk = (open) => (dispatch, state) => {
  console.log("🚀 ~ file: thunks.js ~ line 7 ~ openModalThunk ~ open", open);

  dispatch(openModal(open));
};
