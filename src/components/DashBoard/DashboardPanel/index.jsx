import { useState, useEffect } from "react";
import { Content } from "./styled";
import Container from "../Container";
import UserHabits from "../YourHabits/UserHabits";
import Graphic from "../Graphic";
import Modal from "../../Modal/index";
// import GroupContainer from "../Groups/GroupContainer";

import axios from "axios";

const DashboardPanel = () => {
  const [next, setNext] = useState("https://kabit-api.herokuapp.com/habits/");
  const [habits, setHabits] = useState([]);
  const storagedId = localStorage.getItem("id");
  const userId = JSON.parse(storagedId);

  useEffect(() => {
    if (next) {
      axios
        .get(`${next}`)
        .then((response) => {
          setHabits([...habits, ...response.data.results]);
          setNext(response.data.next);
        })
        .catch((error) => console.log(error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [next]);

  const filterdHabits = habits.filter((habit) => habit.user === userId);
  return (
    <Content>
      <div id="habits-card">
        <Container>
          <UserHabits habits={filterdHabits} />
        </Container>
      </div>
      <div id="graphic-card">
        <Container>
          <Graphic habits={filterdHabits} />
        </Container>
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
