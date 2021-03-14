import React, { useEffect, useState } from "react";
import { CardGoals, GoalDiv, Main, ProgressBar } from "./styled";
import { GiStairsGoal } from "react-icons/gi";
import api from "../../../../services";
import { useDispatch, useSelector } from "react-redux";
import { FiEdit } from "react-icons/fi";
import { openModalThunk } from "../../../../store/modules/Modal/thunks";
import Modal from "../../../Modal/index";
import EditGoal from "./EditGoal";

const GroupCardGoals = () => {
  const [goals, setGoals] = useState([]);

  const [next, setNext] = useState("/goals/");

  const [goal, setGoal] = useState({});
  const user = useSelector((state) => state.user);
  const groupId = user.group;
  const dispatch = useDispatch();

  useEffect(() => {
    //consumindo rota get goals
    api
      .get(next, {
        params: { group: groupId },
      })
      .then((response) => {
        setGoals([...goals, ...response.data.results]);
        setNext(response.data.next);
      })
      .catch((e) => console.log(e));
  }, [next, goals]);

  const handleClick = (goal) => {
    dispatch(openModalThunk(true));
    setGoal(goal);
  };

  return (
    <Main>
      <Modal>
        <EditGoal goalId={goal.id} />
      </Modal>
      <h1>Goals</h1>
      <CardGoals>
        {goals &&
          goals
            // .sort((a, b) => b.how_much_achieved - a.how_much_achieved)
            .map((goal, index) => (
              <GoalDiv key={index}>
                <div>
                  <p>
                    <GiStairsGoal /> {goal.title}
                  </p>
                  <FiEdit onClick={() => handleClick(goal)} />
                </div>
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
    </Main>
  );
};

export default GroupCardGoals;
