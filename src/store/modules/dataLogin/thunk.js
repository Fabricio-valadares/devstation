import { loginAction } from "./actions";
import api from "../../../services";

export const loginThunk = (data, history) => (dispatch, state) => {
  localStorage.clear();
  api
    .post("/sessions/", data)
    .then((response) => {
      localStorage.setItem("token", JSON.stringify(response.data.access));
      dispatch(loginAction(response.data.access));

      history.push("/dashboard");
    })
    .catch((error) => console.log(error));
};
