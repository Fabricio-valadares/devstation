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

const CreateGoal = ({ groupId, handleClose }) => {
  const classes = useStyles();

  const [errorMsg, setErrorMsg] = useState(false);

  const token = localStorage.getItem("token");

  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
    difficulty: yup.string().required("Campo Obrigatório"),
  });

  const { handleSubmit, register, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    //consumindo a rota create goal
    data["group"] = groupId;
    data["how_much_achieved"] = 0;

    api
      .post(`/goals/`, data, {
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
        <h1>Criar Goal</h1>
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
          <h1>Dificuldade: </h1>
          <InputBase
            className={classes.textField}
            margin="dense"
            variant="outlined"
            placeholder="Dificuldade"
            name="difficulty"
            inputRef={register}
            error={!!errors.difficulty}
          />
          <FormHelperText className={classes.helper} error={!!errors.email}>
            {errors.difficulty?.message}
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

export default CreateGoal;
