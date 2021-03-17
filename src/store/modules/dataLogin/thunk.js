import { loginAction } from "./actions";
import api from "../../../services";
import jwt_decode from "jwt-decode";

export const loginThunk = (data, history, setError, setValid) => (
  dispatch,
  state
) => {
  localStorage.clear();
  api
    .post("/sessions/", data)
    .then((response) => {
      setValid(true);

      localStorage.setItem("token", JSON.stringify(response.data.access));

      const { user_id } = jwt_decode(JSON.stringify(response.data.access));
      localStorage.setItem("id", user_id);

      dispatch(
        loginAction({
          token: JSON.stringify(response.data.access),
          id: user_id,
        })
      );

      history.push("/dashboard");
    })
    .catch((error) => {
      setError(true);
      console.log(error);
    });
};
