import { useState, useEffect } from "react";
import { Content } from "./styled";
import Container from "../Container";
import UserHabits from "../YourHabits/UserHabits";
import Graphic from "../Graphic";
import Modal from "../../Modal/index";

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

  const [next, setNext] = useState("/habits/");
  const [habits, setHabits] = useState([]);
  const [personalHabits, setPersonalHabits] = useState([]);
  const storagedId = localStorage.getItem("id");
  const userId = JSON.parse(storagedId);

  useEffect(() => {
    if (next) {
      api
        .get(`${next}`)
        .then((response) => {
          setHabits([...habits, ...response.data.results]);
          setNext(response.data.next);
        })
        .catch((error) => console.log(error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [next]);

  useEffect(() => {
    api
      .get("/habits/personal/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setPersonalHabits(response.data))
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredHabits = habits.filter((habit) => habit.user === userId);

  return (
    <Content>
      <Modal setOpen={setOpen} open={open} />
      <div id="habits-card">
        <Container>
          <UserHabits habits={filteredHabits} />
        </Container>
      </div>
      <div id="graphic-card">
        <Container>
          <Graphic habits={personalHabits} />
        </Container>
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
