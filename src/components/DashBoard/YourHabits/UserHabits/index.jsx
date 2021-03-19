import { useState, useEffect } from "react";
import Habit from "../Habit/index";
import Modal from "../../../Modal";
import CreateHabit from "../../CreateHabit";
import EditHabit from "../../EditHabit";
import api from "../../../../services";

import {
  UserCard,
  PersonalHabits,
  HabitsHeader,
  PlusIcon,
  Habits,
} from "./styled";
import { SkeletonHabits } from "../SkeletonHabits";

const UserHabits = ({ user, setFilteredHabits, setHabits }) => {
  const [createView, setCreateView] = useState(false);
  const [editView, setEditView] = useState(false);
  const [currentHabitId, setCurrentHabitId] = useState({});
  const [personalHabits, setPersonalHabits] = useState();
  const storagedToken = localStorage.getItem("token");
  const token = JSON.parse(storagedToken);

  const handleCreateOpen = () => {
    setCreateView(true);
  };

  const handleCreateClose = () => {
    setCreateView(false);
  };

  const handleEditOpen = (habitId) => {
    setCurrentHabitId(habitId);
    setEditView(true);
  };

  const handleEditClose = () => {
    setEditView(false);
  };

  useEffect(() => {
    api
      .get("/habits/personal/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setPersonalHabits(response.data))
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createView, editView]);

  return (
    <UserCard>
      {createView && (
        <Modal open={createView} handleClose={handleCreateClose}>
          <CreateHabit userId={user} close={handleCreateClose} token={token} />
        </Modal>
      )}
      {editView && (
        <Modal open={editView} handleClose={handleEditClose} >
          <EditHabit
            close={handleEditClose}
            token={token}
            habitId={currentHabitId}
            setFilteredHabits={setFilteredHabits}
            setHabits={setHabits}
          />
        </Modal>
      )}
      <PersonalHabits>
        <HabitsHeader>
          <h3>Seus hábitos</h3>
          <button onClick={handleCreateOpen}>
            <PlusIcon />
          </button>
        </HabitsHeader>
        <Habits>
          {personalHabits ? (
            personalHabits.map((habit) => (
              <Habit
                key={habit.id}
                habit={habit}
                open={handleEditOpen}
                close={handleEditClose}
              />
            ))
          ) : (
            <SkeletonHabits />
          )}
        </Habits>
      </PersonalHabits>
    </UserCard>
  );
};

export default UserHabits;
