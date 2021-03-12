import { CardInside, MapContainer } from "./styled";

const GroupCard = ({ list }) => {
  return (
    <CardInside>
      {list &&
        list.map((element, index) => (
          <MapContainer key={index}>
            <>
              <h1>{element?.title || element?.username}</h1>
              {element.realization_time && (
                <p>
                  Tempo realizado ? <br />
                  {element.realization_time}
                </p>
              )}
              {element.email && <p> {element?.email}</p>}
              {element.difficulty && <p>{element?.difficulty}</p>}
              {element.how_much_achieved && (
                <p>{`${element.how_much_achieved} %`}</p>
              )}
            </>
          </MapContainer>
        ))}
    </CardInside>
  );
};

export default GroupCard;
