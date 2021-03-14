import { Main } from "./styled";
import Aside from "../../components/MenuAside/Aside/index";
import DashboardPanel from "../../components/DashBoard/DashboardPanel";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setUserThunk } from "../../store/modules/User/thunks";

const DashBoard = () => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("id");

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      history.push("/login");
    }
    const user = {
      id: userId,
      token: token,
    };
    dispatch(setUserThunk(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Main>
      <Aside />
      <DashboardPanel />
    </Main>
  );
};

export default DashBoard;
