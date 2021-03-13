import { CardInside, MapContainer } from "./styled";

const GroupCard = ({ users, goals, activities }) => {
  return (
    <>
      {users &&
        users.map((user, index) => (
          <div key={index}>
            <div
              style={{
                backgroundColor: "white",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
              }}
            />
            <div>
              <h1>{user.username}</h1>
              <p>{user.email}</p>
            </div>
          </div>
        ))}

      <div>
        {goals &&
          goals.map((goal, index) => (
            <div key={index}>
              <h1>{goal.title}</h1>
              <p>{goal.difficulty}</p>
            </div>
          ))}
      </div>
      <div>
        {activities &&
          activities.map((activity, index) => (
            <div key={index}>
              <div
                style={{
                  backgroundColor: "white",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                }}
              />
              <div>
                <h1>{activity.title}</h1>
                <p>{activity.difficulty}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default GroupCard;
