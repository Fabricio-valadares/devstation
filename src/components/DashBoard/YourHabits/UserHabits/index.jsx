import Habit from "../Habit/index";

import {
  UserCard,
  PersonalHabits,
  HabitsHeader,
  PlusIcon,
  Habits,
} from "./styled";

const UserHabits = ({ habits }) => {
  return (
    <UserCard>
      <PersonalHabits>
        <HabitsHeader>
          <h3>Seus hábitos</h3>
          <button>
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
