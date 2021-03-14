import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../../../services";
import { ActivityDiv, CardActivities, WhiteBall } from "./styled";

const GroupCardActivities = () => {
  const [activities, setActivities] = useState([]);
  const user = useSelector((state) => state.user);
  const groupId = user.group;

  useEffect(() => {
    //consumindo rota get activities
    api
      .get("/activities/", {
        params: { group: groupId },
      })
      .then((response) => setActivities(response.data.results))
      .catch((e) => console.log(e));
  }, []);

  return (
    <CardActivities>
      {activities &&
        activities.map((activity, index) => (
          <ActivityDiv key={index}>
            <figure>
              <WhiteBall />
            </figure>
            <div>
              <h1>{activity.title}</h1>
              <p>
                {/* Realization  */}
                {format(new Date(activity.realization_time), "dd/MM/yyy")}
              </p>
            </div>
          </ActivityDiv>
        ))}
    </CardActivities>
  );
};

export default GroupCardActivities;
