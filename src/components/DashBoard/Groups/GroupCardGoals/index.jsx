import React from "react";
import { CardGoals, GoalDiv, ProgressBar } from "./styled";
import { GiStairsGoal } from "react-icons/gi";

const GroupCardGoals = ({ goals }) => {
  return (
    <CardGoals>
      <h1>Goals</h1>

      {goals &&
        goals
          .sort((a, b) => b.how_much_achieved - a.how_much_achieved)
          .map((goal, index) => (
            <GoalDiv key={index}>
              <p>
                {/* <GiStairsGoal /> */}
                {goal.title}
              </p>
              <p>
                <GiStairsGoal /> {goal.difficulty}
              </p>
              <ProgressBar
                progress={
                  goal.how_much_achieved > 100 ? 100 : goal.how_much_achieved
                }
              />
            </GoalDiv>
          ))}
    </CardGoals>
  );
};

export default GroupCardGoals;
