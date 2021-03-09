import api from "../../../services";
import { getUsersList } from "./actions";

export const getUsersThunk = () => async (dispatch) => {
  try {
    const res = await api.get("/users/");
    dispatch(getUsersList(res.data));
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
