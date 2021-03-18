import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

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
  DeleteButton,
  DeleteIcon,
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
      .then(() => {
        toast.dark("🚀 Nome de usuario alterado !!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        reset();
      })
      .catch(() => {
        toast.error(`😵 Sua edição falhou `, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const deleteAccount = () => {
    const id = localStorage.getItem("id");

    api
      .delete(`/users/${id}/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token} `,
        },
      })
      .then((response) => {
        history.push("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Main>
      <h1>Atualizar nome de usuario</h1>

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
        <InputBox>
          <IconBox>
            <DeleteIcon />
          </IconBox>
          <DeleteButton onClick={deleteAccount}>Deletar Conta</DeleteButton>
        </InputBox>
      </InputsContainer>
      <CloseButton onClick={close}>
        <CloseIcon />
      </CloseButton>
    </Main>
  );
};

export default UpdateUserForm;
