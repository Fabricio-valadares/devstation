import { useState } from "react";
import { toast } from "react-toastify";
import api from "../../../services";

import {
  DivNameCategory,
  DivDescription,
  DivWarning,
  DivSpan,
  MessageSuccess,
  Main,
  ButtonStyled,
  InfoIcon,
  TagIcon,
  DescriptionIcon,
  OutIcon,
  CloseIcon,
  CloseButton,
} from "./styled";

const ModalGroup = ({ ele, close }) => {
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
      <Main>
        <DivNameCategory>
          <h1>
            <InfoIcon />
            {ele.name}
          </h1>
          <h3>
            <TagIcon />
            {ele.category}
          </h3>
        </DivNameCategory>
        <DivDescription>
          <h3>
            <DescriptionIcon />
            {ele.description}
          </h3>
        </DivDescription>
        {message ? (
          <DivWarning>
            <DivSpan>
              <OutIcon />
              Deseja sair de seu grupo atual para entrar neste?
            </DivSpan>
            <ButtonStyled onClick={subscribeInGroup}>Increver-se</ButtonStyled>
          </DivWarning>
        ) : (
          <MessageSuccess>Inscrição realizada com sucesso !</MessageSuccess>
        )}
        <CloseButton onClick={close}>
          <CloseIcon />
        </CloseButton>
      </Main>
    </>
  );
};

export default ModalGroup;
