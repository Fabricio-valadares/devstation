import { yupResolver } from "@hookform/resolvers/yup";
import { Alert } from "@material-ui/lab";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import * as yup from "yup";
import api from "../../../services";
import {
  Main,
  InputsContainer,
  InputBox,
  Input,
  InfoIcon,
  ErrorIcon,
  IconBox,
  SaveButton,
  SaveIcon,
  CloseButton,
  CloseIcon,
} from "./styled";

const UpdateUserForm = ({ close }) => {
  const history = useHistory();

  const [token] = useState(() => {
    const localToken = localStorage.getItem("token") || "";

    if (!localToken) {
      history.push("/login");
    }

    return JSON.parse(localToken);
  });

  const [errorMsg, setErrorMsg] = useState(false);
  const [validMsg, setValidMsg] = useState(false);

  const schema = yup.object().shape({
    username: yup.string().required("Campo Obrigatório"),
  });

  const { handleSubmit, register, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    const id = localStorage.getItem("id");

    api
      .patch(`/users/${id}/`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token} `,
        },
      })
      .then((response) => {
        setValidMsg(true);
        setTimeout(() => {
          setValidMsg(false);
        }, 3000);
        reset();
        close();
      })
      .catch((error) => {
        setErrorMsg(true);
        setTimeout(() => {
          setErrorMsg(false);
        }, 3000);
      });
  };

  return (
    <Main>
      <h1>Atualizar username</h1>
      {errorMsg && (
        <Alert severity="error">
          Atualização falhou, verifique os dados e tente novamente.
        </Alert>
      )}
      {validMsg && (
        <Alert severity="success">Atualização realizada com sucesso.</Alert>
      )}
      <InputsContainer onSubmit={handleSubmit(handleForm)}>
        <InputBox>
          <IconBox>{errors.username ? <ErrorIcon /> : <InfoIcon />}</IconBox>
          <Input
            name="username"
            ref={register}
            type="text"
            placeholder={
              errors.username ? errors.username.message : "Seu nome de usuário"
            }
          />
        </InputBox>
        <InputBox>
          <IconBox>
            <SaveIcon />
          </IconBox>
          <SaveButton type="submit">Atualizar nome</SaveButton>
        </InputBox>
      </InputsContainer>
      <CloseButton onClick={close}>
        <CloseIcon />
      </CloseButton>
    </Main>
  );
};

export default UpdateUserForm;
