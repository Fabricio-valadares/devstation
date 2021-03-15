import { groupsAction } from "./actions";
import axios from "axios";

export const groupsThunks = (url) => (dispatch, state) => {
  if (url !== null) {
    axios
      .get(`${url}`)
      .then((response) => {
        dispatch(groupsAction(response.data));
      })
      .catch((error) => console.log(error));
  }
};
