import { useState, useEffect } from "react";
import { Content } from "./styled";
import Container from "../Container";
import UserHabits from "../YourHabits/UserHabits";
import Modal from "../../Modal/index";
import GroupContainer from "../Groups/GroupContainer";

import api from "../../../services/index";

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
      <div id="graphic-card">
        <Container>Grafico</Container>
      </div>
      <div id="nameGroup-card">
        <Container>Name Group</Container>
      </div>
      <div id="goals-card">
        <Container>Goals</Container>
      </div>
      <div id="activities-card">
        <Container>Activities</Container>
      </div>
      <Modal />
    </Content>
  );
};

export default DashboardPanel;
