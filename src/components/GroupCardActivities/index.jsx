import { format } from "date-fns";
import React from "react";
import { ActivityDiv, CardActivities, WhiteBall } from "./styled";

const GroupCardActivities = ({ activities }) => {
  return (
    <CardActivities>
      <h1>Atividades</h1>
      {activities &&
        activities.map((activity, index) => (
          <ActivityDiv key={index}>
            <WhiteBall />
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
