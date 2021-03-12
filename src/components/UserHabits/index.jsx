import Habit from "../Habit";

import {
  UserCard,
  PersonalHabits,
  HabitsGraph,
  HabitsHeader,
  PlusIcon,
  Habits,
} from "./styled";

const UserHabits = ({ habits }) => {
  return (
    <UserCard>
      <PersonalHabits>
        <HabitsHeader>
          <h3>Your Habits</h3>
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
      <HabitsGraph></HabitsGraph>
    </UserCard>
  );
};

export default UserHabits;
