import { groupsAction } from "./actions";
import axios from "axios";

export const groupsThunks = (url, setNumberRota) => (dispatch, state) => {
  axios
    .get(`${url}`)
    .then((response) => {
      dispatch(groupsAction(response.data.results));
    })
    .catch((error) => console.log(error));
};
