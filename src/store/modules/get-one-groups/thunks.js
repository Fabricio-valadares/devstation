import axios from "axios";
import { getOneGroup } from "./actions";

export const getOneGroupThunk = (url) => async (dispatch) => {
  try {
    if (url !== "https://kabit-api.herokuapp.com/groups/null/") {
      const res = await axios.get(url);
      dispatch(getOneGroup(res.data));
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
