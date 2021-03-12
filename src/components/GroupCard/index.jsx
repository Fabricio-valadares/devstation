const GroupCard = ({ children, list }) => {
  return (
    <div style={{ backgroundColor: "black", border: "1px solid white" }}>
      {list &&
        list.map((element, index) => (
          <div key={index}>
            <h1>{element?.title || element?.username}</h1>
            {element.realization_time && (
              <p>
                Tempo realizado ? <br />
                {element?.realization_time}
              </p>
            )}
            {element.email && <p> {element?.email}</p>}
            {element.difficulty && <p>{element?.difficulty}</p>}
            {element.how_much_achieved && (
              <span>{`${element.how_much_achieved} %`}</span>
            )}
          </div>
        ))}
    </div>
  );
};

export default GroupCard;
