import React, { useEffect, useState } from "react";
import {
  CardGoals,
  GoalDiv,
  Main,
  ProgressBar,
  GoalsHeader,
  PlusIcon,
} from "./styled";
import { GiStairsGoal } from "react-icons/gi";
import api from "../../../../services";
import { useDispatch, useSelector } from "react-redux";
import { FiEdit } from "react-icons/fi";
import { openModalThunk } from "../../../../store/modules/Modal/thunks";
import Modal from "../../../Modal/index";
import EditGoal from "./EditGoal";
import CreateGoal from "./CreateGoal";

const GroupCardGoals = () => {
  const [goals, setGoals] = useState([]);
  // const [newGoal, setNewGoal] = useState(false);
  const [editGoal, setEditGoal] = useState(false);

  const [goal, setGoal] = useState({});
  const [changed, setChanged] = useState(false);

  const groupId = localStorage.getItem("groupId");

  // const [next, setNext] = useState(`/goals/?group=${groupId}`);

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    //consumindo rota get goals
    api
      .get(`/goals/?group=${groupId}`)
      .then((response) => {
        const results = response.data.results;
        setGoals(results);
        // setNext(response.data.next);
      })
      .catch((e) => console.log(e));
  }, [open]);

  const handleClick = (goal) => {
    if (goal.title) {
      setOpen(true);
      setEditGoal(true);
      setGoal(goal);
    } else {
      setOpen(true);
      setEditGoal(false);
    }
  };

  const handleChanged = () => {
    setChanged(!changed);
  };

  return (
    <Main>
      <Modal open={open} handleClose={handleClose}>
        {editGoal ? (
          <EditGoal
            setOpen={setOpen}
            handleChanged={handleChanged}
            handleClose={handleClose}
            goalId={goal.id}
          />
        ) : (
          <CreateGoal
            setOpen={setOpen}
            handleChanged={handleChanged}
            handleClose={handleClose}
            groupId={groupId}
          />
        )}
      </Modal>
      <GoalsHeader>
        <h3>Goals</h3>
        <button onClick={handleClick}>
          <PlusIcon />
        </button>
      </GoalsHeader>
      <CardGoals>
        {goals &&
          goals.map((goal, index) => (
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
