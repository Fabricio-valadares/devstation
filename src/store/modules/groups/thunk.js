import { groupsAction } from "./actions";
import api from "../../../services";

export const groupsThunks = (data) => (dispatch, state) => {
  // consumindo rota de get groups
  api
    .get("/groups/", data)
    .then((response) => {
      dispatch(groupsAction(response.data.results));
    })
    .catch((error) => console.log(error));
};
