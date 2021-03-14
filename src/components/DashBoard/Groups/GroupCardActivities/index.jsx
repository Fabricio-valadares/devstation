import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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

const GroupCardActivities = () => {
  const [activities, setActivities] = useState([]);
  const [activity, setActivity] = useState({});

  const [editActivity, setEditActivity] = useState(false);
  const [next, setNext] = useState("/activities/");
  const user = useSelector((state) => state.user);
  const groupId = user.group;

  useEffect(() => {
    //consumindo rota get activities
    api
      .get(next, {
        params: { group: groupId },
      })
      .then((response) => {
        setActivities([...activities, ...response.data.results]);
        setNext(response.data.next);
      })
      .catch((e) => console.log(e));
  }, [next]);

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

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Main>
      <Modal open={open} handleClose={handleClose}>
        {editActivity ? (
          <EditActivity
            setOpen={setOpen}
            // handleChanged={handleChanged}
            handleClose={handleClose}
            activityId={activity.id}
          />
        ) : (
          <CreateActivity
            setOpen={setOpen}
            // handleChanged={handleChanged}
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
        {activities &&
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
          ))}
      </CardActivities>
    </Main>
  );
};

export default GroupCardActivities;
