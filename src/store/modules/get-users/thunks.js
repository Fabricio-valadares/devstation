import axios from "axios";
import { getUsersList } from "./actions";

export const getUsersThunk = (url) => async (dispatch) => {
  try {
    if (url !== null) {
      const res = await axios.get(url);
      dispatch(getUsersList(res.data));
    }
  } catch (error) {
    console.log(error);
  }
};
