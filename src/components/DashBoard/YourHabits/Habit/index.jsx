import React from "react";

import { Card, Title, CardInfo, ProgressBar, EditIcon } from "./styled";

const Habit = ({ habit, open }) => {
  return (
    <Card>
      <Title>
        <h4>{habit.title}</h4>
        <button onClick={() => open(habit.id)}>
          <EditIcon />
        </button>
      </Title>
      <CardInfo>
        <p>Categoria: {habit.category}</p>
        <span>Dificuldade: {habit.difficulty}</span>
      </CardInfo>
      <ProgressBar progress={habit.how_much_achieved} />
    </Card>
  );
};

export default Habit;
