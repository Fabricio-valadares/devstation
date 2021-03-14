import { useState, useEffect } from "react";
import { Content } from "./styled";
import Container from "../Container";
import UserHabits from "../YourHabits/UserHabits";
import Modal from "../../Modal/index";
import GroupContainer from "../Groups/GroupContainer";

import api from "../../../services/index";
import GroupCardUsers from "../Groups/GroupCardUsers";
import GroupCardGoals from "../Groups/GroupCardGoals";
import GroupCardActivities from "../Groups/GroupCardActivities";

const DashboardPanel = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

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
      <Modal setOpen={setOpen} open={open} />
      <div id="habits-card">
        <Container>
          <UserHabits habits={habits} />
        </Container>
      </div>
      <div id="graphic-card">
        <Container>Grafico</Container>
      </div>
      <div id="nameGroup-card">
        <Container>
          <GroupCardUsers />
        </Container>
      </div>
      <div id="goals-card">
        <Container>
          <GroupCardGoals />
        </Container>
      </div>
      <div id="activities-card">
        <Container>
          <GroupCardActivities />
        </Container>
      </div>
    </Content>
  );
};

export default DashboardPanel;
