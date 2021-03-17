import { useState } from "react";
import { toast } from "react-toastify";
import api from "../../../services";
import {
  DivNameCategory,
  DivDescription,
  DivWarning,
  DivSpan,
  MessageSuccess,
  Container,
  ButtonStyled,
} from "./styled";

const ModalGroup = ({ ele }) => {
  const token = JSON.parse(localStorage.getItem("token"));

  const [message, setMessage] = useState(true);

  const subscribeInGroup = () => {
    api
      .post(
        `/groups/${ele.id}/subscribe/`,
        { key: true },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        toast.dark(`🚀   Inscrição realizada com sucesso `, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setMessage(false);
      })
      .catch((error) => {
        toast.error(`😵 Ocorreu um erro`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        console.log(error);
      });
  };
  return (
    <>
      <Container>
        <DivNameCategory>
          <h1 style={{ marginRight: "20px" }}>
            <span style={{ fontWeight: "600" }}>Name: </span>
            {ele.name}
          </h1>
          <h3>
            <span style={{ fontWeight: "600" }}>Categoria: </span>
            {ele.category}
          </h3>
        </DivNameCategory>
        <DivDescription>
          <h3>
            <span style={{ fontWeight: "600" }}>Descrição: </span>
            {ele.description}
          </h3>
        </DivDescription>
        {message ? (
          <DivWarning>
            <DivSpan>Sair do grupo onde estou para entrar nesse !</DivSpan>
            <ButtonStyled onClick={subscribeInGroup}>Increver-se</ButtonStyled>
          </DivWarning>
        ) : (
          <MessageSuccess>Inscrição realizada com sucesso !</MessageSuccess>
        )}
      </Container>
    </>
  );
};

export default ModalGroup;
