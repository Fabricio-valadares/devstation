import Habit from "../Habit/index";
import Modal from "../../../Modal";
import CreateHabit from "../../CreateHabit";
import { useDispatch } from "react-redux";
import { openModalThunk } from "../../../../store/modules/Modal/thunks";

import {
  UserCard,
  PersonalHabits,
  HabitsHeader,
  PlusIcon,
  Habits,
} from "./styled";

const UserHabits = ({ habits }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openModalThunk(true));
  };

  return (
    <UserCard>
      <Modal>
        <CreateHabit />
      </Modal>
      <PersonalHabits>
        <HabitsHeader>
          <h3>Seus hábitos</h3>
          <button onClick={handleClick}>
            <PlusIcon />
          </button>
        </HabitsHeader>
        <Habits>
          {habits.map((habit) => (
            <Habit key={habit.id} habit={habit} />
          ))}
        </Habits>
      </PersonalHabits>
    </UserCard>
  );
};

export default UserHabits;
