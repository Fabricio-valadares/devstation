import { useState } from "react";
import api from "../../../services";

const ModalGroup = ({ ele }) => {
  const token = localStorage.getItem("token");

  const sd = JSON.parse(token);

  const [message, setMessage] = useState(true);

  const subscribeInGroup = () => {
    console.log(sd);
    api
      .post(
        `/groups/${ele.id}/subscribe/`,
        { key: true },
        {
          headers: { Authorization: `Bearer ${sd}` },
        }
      )
      .then((response) => {
        console.log(response);
        setMessage(false);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div>
        <h1>{ele.name}</h1>
        <h3>{ele.id}</h3>

        {message ? (
          <>
            <span>Sair do grupo onde estou para entrar nesse !</span>
            <button onClick={subscribeInGroup}>Increver-se</button>
          </>
        ) : (
          <h1>Incrição realizada com sucesso !</h1>
        )}
      </div>
    </>
  );
};

export default ModalGroup;
