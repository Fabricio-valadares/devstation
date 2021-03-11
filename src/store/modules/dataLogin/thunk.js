import { loginAction } from "./actions";
import api from "../../../services";
import jwt_decode from "jwt-decode";

export const loginThunk = (data, history) => (dispatch, state) => {
  localStorage.clear();
  console.log(data);
  api
    .post("/sessions/", data)
    .then((response) => {
      localStorage.setItem("token", JSON.stringify(response.data.access));

      const { user_id } = jwt_decode(JSON.stringify(response.data.access));

      dispatch(
        loginAction({
          token: JSON.stringify(response.data.access),
          id: user_id,
        })
      );

      history.push("/dashboard");
    })
    .catch((error) => console.log(error));
};
