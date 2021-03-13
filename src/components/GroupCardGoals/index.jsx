import React from "react";
import { CardGoals, GoalDiv } from "./styled";

const GroupCardGoals = ({ goals }) => {
  return (
    <CardGoals>
      <h1>Goals</h1>

      {goals &&
        goals.map((goal, index) => (
          <GoalDiv key={index}>
            <h1>{goal.title}</h1>
            <p>{goal.difficulty}</p>
          </GoalDiv>
        ))}
    </CardGoals>
  );
};

export default GroupCardGoals;
