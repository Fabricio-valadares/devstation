import axios from "axios";
import { getOneGroup } from "./actions";

export const getOneGroupThunk = (url) => async (dispatch) => {
  try {
    const res = await axios.get(url);
    dispatch(getOneGroup(res.data));
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
