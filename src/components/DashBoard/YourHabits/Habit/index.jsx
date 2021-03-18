import React from "react";

import {
  Card,
  Title,
  CardInfo,
  ProgressBar,
  EditIcon,
  InfoIcon,
  BarIcon,
  TagIcon,
  FireIcon,
  ProgressBox,
} from "./styled";

const Habit = ({ habit, open }) => {
  return (
    <Card>
      <Title>
        <h4>
          <InfoIcon />
          {habit.title}
        </h4>
        <button onClick={() => open(habit.id)}>
          <EditIcon />
        </button>
      </Title>
      <CardInfo>
        <p>
          <TagIcon />
          {habit.category}
        </p>
        <span>
          <BarIcon />
          {habit.difficulty}
        </span>
      </CardInfo>
      <ProgressBox>
        <FireIcon />
        <ProgressBar progress={habit.how_much_achieved} />
      </ProgressBox>
    </Card>
  );
};

export default Habit;
