import { Main } from "./styled";
import Aside from "../../components/Aside";
import DashboardPanel from "../../components/DashboardPanel";
import { useEffect } from "react";
import { useHistory } from "react-router";

const DashBoard = () => {
  const token = localStorage.getItem("token");
  const history = useHistory();

  useEffect(() => {
    if (!token) {
      history.push("/login");
    }
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
