import { GET_GROUPS } from "./actionsType";

export const groupsAction = (data) => ({
  type: GET_GROUPS,
  data,
});
