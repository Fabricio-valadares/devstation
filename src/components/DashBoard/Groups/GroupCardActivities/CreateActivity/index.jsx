import { Button, FormHelperText, InputBase } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useDebugValue, useEffect, useState } from "react";
import api from "../../../../../services";
import { Main, useStyles } from "./styled";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { openModalThunk } from "../../../../../store/modules/Modal/thunks";
import { useDispatch } from "react-redux";
import { FiTrash } from "react-icons/fi";
import { DivFlex } from "./styled";
import { FormStyled } from "./styled";

const CreateActivity = ({ groupId, handleClose, setOpen }) => {
  const classes = useStyles();

  const [errorMsg, setErrorMsg] = useState(false);

  const token = localStorage.getItem("token");

  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
  });

  const { handleSubmit, register, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    data["group"] = groupId;
    data["realization_time"] = "2021-03-10T15:00:00Z";

    //consumindo a rota create activity
    api
      .post(`/activities/`, data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then(() => {
        reset();
        handleClose();
      })
      .catch((error) => {
        setErrorMsg(true);
        setTimeout(() => {
          setErrorMsg(false);
        }, 3000);
        console.log(error);
      });
  };

  return (
    <Main>
      {errorMsg && (
        <Alert severity="error">
          Sua criação falhou, verifique os dados e tente novamente.
        </Alert>
      )}
      <FormStyled onSubmit={handleSubmit(handleForm)}>
        <h1>Criar Atividade</h1>
        <div>
          <h1>Titulo:</h1>

          <InputBase
            className={classes.textField}
            margin="dense"
            variant="outlined"
            placeholder="Titulo"
            name="title"
            inputRef={register}
            error={!!errors.title}
          />
          <FormHelperText className={classes.helper} error={!!errors.email}>
            {errors.title?.message}
          </FormHelperText>
        </div>

        <div>
          <Button type="submit" variant="contained" color="primary">
            Criar
          </Button>
        </div>
      </FormStyled>
    </Main>
  );
};

export default CreateActivity;
