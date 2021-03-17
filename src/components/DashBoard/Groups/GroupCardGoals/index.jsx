import React, { useEffect, useState } from "react";

import { Button } from "@material-ui/core";

import { EditIcon } from "../GroupCardActivities/styled";
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
import Modal from "../../../Modal/index";
import EditGoal from "./EditGoal";
import CreateGoal from "./CreateGoal";
import { SkeletonGoals } from "./SkeletonGoals/index";

const GroupCardGoals = () => {
  const [goals, setGoals] = useState();

  const [editGoal, setEditGoal] = useState(false);

  const [goal, setGoal] = useState({});
  const [changed, setChanged] = useState(false);

  const groupId = localStorage.getItem("groupId");

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    api
      .get(`/goals/?group=${groupId}`)
      .then((response) => {
        const results = response.data.results;
        setGoals(results);
      })
      .catch((e) => setGoals([]));
  }, [open, groupId]);

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
        <h3>Objetivos</h3>
        <button onClick={handleClick}>
          <PlusIcon />
        </button>
      </GoalsHeader>
      <CardGoals>
        {goals ? (
          goals.map((goal, index) => (
            <GoalDiv key={index}>
              <div>
                <p>{goal.title}</p>
                <Button onClick={() => handleClick(goal)}>
                  <EditIcon />
                </Button>
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
          ))
        ) : (
          <SkeletonGoals />
        )}
      </CardGoals>
    </Main>
  );
};

export default GroupCardGoals;
