import React, { useEffect, useState } from "react";

import { format } from "date-fns";

import api from "../../../../services";

import {
  ActivityDiv,
  CardActivities,
  WhiteBall,
  ActivitiesHeader,
  PlusIcon,
  Main,
  EditIcon,
  Title,
} from "./styled";

import Modal from "../../../Modal";

import EditActivity from "./EditActivitie";
import CreateActivity from "./CreateActivity";
import { SkeletonActivities } from "./SkeletonActivities";

const GroupCardActivities = () => {
  const [activities, setActivities] = useState();

  const [activity, setActivity] = useState({});

  const [editActivity, setEditActivity] = useState(false);

  const groupId = localStorage.getItem("groupId");

  const [open, setOpen] = useState(false);

  useEffect(() => {
    //consumindo rota get activities
    api
      .get(`/activities/?group=${groupId}`, {
        params: { group: groupId },
      })
      .then((response) => {
        setActivities(response.data.results);
      })
      .catch((e) => console.log(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, groupId]);

  const handleClick = (activity) => {
    if (activity.title) {
      setActivity(activity);
      setEditActivity(true);
      setOpen(true);
    } else {
      setEditActivity(false);
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Main>
      <Modal open={open} handleClose={handleClose}>
        {editActivity ? (
          <EditActivity
            setOpen={setOpen}
            handleClose={handleClose}
            activityId={activity.id}
          />
        ) : (
          <CreateActivity
            setOpen={setOpen}
            handleClose={handleClose}
            groupId={groupId}
          />
        )}
      </Modal>
      <ActivitiesHeader>
        <h3>Activities</h3>
        <button onClick={handleClick}>
          <PlusIcon />
        </button>
      </ActivitiesHeader>

      <CardActivities>
        {activities ? (
          activities.map((activity, index) => (
            <ActivityDiv key={index}>
              <figure>
                <WhiteBall />
              </figure>
              <div>
                <Title>
                  <h4>{activity.title}</h4>
                  <button onClick={() => handleClick(activity)}>
                    <EditIcon />
                  </button>
                </Title>
                <p>
                  {format(new Date(activity.realization_time), "dd/MM/yyy")}
                </p>
              </div>
            </ActivityDiv>
          ))
        ) : (
          <SkeletonActivities />
        )}
      </CardActivities>
    </Main>
  );
};

export default GroupCardActivities;
