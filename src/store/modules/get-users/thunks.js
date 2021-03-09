import axios from "axios";
import { getUsersList } from "./actions";

export const getUsersThunk = (url) => async (dispatch) => {
  try {
    const res = await axios.get(url);
    dispatch(getUsersList(res.data));
    console.log(res)
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
