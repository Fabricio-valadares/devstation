import { useState, useEffect } from "react";
import { Content } from "./styled";
import Container from "../Container";
import UserHabits from "../UserHabits";
import GroupContainer from "../GroupContainer";

import api from "../../services";

const DashboardPanel = () => {
  const storagedToken = localStorage.getItem("token");
  const token = JSON.parse(storagedToken);
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setHabits(response.data))
      .catch((error) => console.log(error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Content>
      <div id="habits-card">
        <Container>
          <UserHabits habits={habits} />
        </Container>
      </div>
      <div id="group-card">
        <Container>
          <GroupContainer />
        </Container>
      </div>
      <div id="activities-card">
        <Container />
      </div>
    </Content>
  );
};

export default DashboardPanel;
