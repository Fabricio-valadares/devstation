import { useState, useEffect } from "react";
import { Content } from "./styled";
import Container from "../Container";
import UserHabits from "../YourHabits/UserHabits";
import Graphic from "../Graphic";

import api from "../../../services/index";
import GroupCardUsers from "../Groups/GroupCardUsers";
import GroupCardGoals from "../Groups/GroupCardGoals";
import GroupCardActivities from "../Groups/GroupCardActivities";

const DashboardPanel = () => {
  const [next, setNext] = useState("/habits/");
  const [habits, setHabits] = useState([]);
  const [filterHabits, setFilterHabits] = useState([]);
  
  const storagedId = localStorage.getItem("id");
  const userId = JSON.parse(storagedId);
  const filteredHabits = habits.filter((habit) => habit.user === userId);


  const setFilteredHabits = async () => {
    setTimeout(() => {
      setNext("/habits/");
      setFilterHabits([]);
      setFilterHabits(filteredHabits);
    }, 10);
  };

  useEffect(() => {
    if (next) {
      api
        .get(`${next}`)
        .then((response) => {
          setTimeout(() => {
            setHabits([...habits, ...response.data.results]);
            setNext(response.data.next);
          }, 10);
        })
        .catch((error) => console.log(error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [next]);

  return (
    <Content>
      <div id="habits-card">
        <Container>
          <UserHabits
            user={userId}
            setFilteredHabits={setFilteredHabits}
            setHabits={setHabits}
          />
        </Container>
      </div>
      <div id="graphic-card">
        <Container>
          <Graphic habits={filteredHabits} />
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
