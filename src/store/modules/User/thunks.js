import api from "../../../services";
import { setUser } from "./actions";

export const setUserThunk = (user) => (dispatch, state) => {
  const { id, token } = user;
  api
    .get(`users/${id}/`, {
      headers: { Authorization: `Bearer ${JSON.parse(token)}` },
    })
    .then((response) => {
      dispatch(setUser(response.data));
    })
    .catch((e) => console.log(e));
};
