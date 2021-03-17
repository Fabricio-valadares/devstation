import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import * as yup from "yup";
import api from "../../../services";
import { FormContainer } from "./styled";

const UpdateUserForm = () => {
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
      })
      .catch((error) => {
        setErrorMsg(true);
        setTimeout(() => {
          setErrorMsg(false);
        }, 3000);
        console.error(error);
      });
  };

  return (
    <FormContainer>
      {errorMsg && (
        <Alert severity="error">
          Atualização falhou, verifique os dados e tente novamente.
        </Alert>
      )}
      {validMsg && (
        <Alert severity="success">Atualização realizada com sucesso.</Alert>
      )}
      <form onSubmit={handleSubmit(handleForm)}>
        <h1>Atualizar username</h1>
        <TextField
          margin="normal"
          variant="outlined"
          label="New username"
          name="username"
          size="small"
          color="primary"
          inputRef={register}
          error={!!errors.username}
          helperText={errors.username?.message}
        />
        <Button type="submit" variant="contained" color="primary">
          Atualizar
        </Button>
      </form>
    </FormContainer>
  );
};

export default UpdateUserForm;
