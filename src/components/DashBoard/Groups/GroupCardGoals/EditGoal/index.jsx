import { useEffect, useState } from "react";

import { Button, FormHelperText, InputBase } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { FiTrash } from "react-icons/fi";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import api from "../../../../../services";

import { Main, useStyles, DivFlex, FormStyled } from "./styled";

const EditGoal = ({ goalId, handleChanged, handleClose }) => {
  const classes = useStyles();

  const [errorMsg, setErrorMsg] = useState(false);

  const token = localStorage.getItem("token");

  const [goal, setGoal] = useState({});

  const schema = yup.object().shape({
    title: yup.string(),
    difficulty: yup.string(),
  });

  const { handleSubmit, register, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    //consumindo rota get one goals
    api
      .get(`/goals/${goalId}/`)
      .then((response) => setGoal(response.data))
      .catch((e) => console.log(e));
  }, [goalId]);

  const handleForm = (data) => {
    if (data.title === "") {
      data.title = goal.title;
    }
    if (data.difficulty === "") {
      data.difficulty = goal.difficulty;
    }
    if (data.how_much_achieved === "") {
      data.how_much_achieved = goal.how_much_achieved;
    }

    //consumindo a rota update goal

    api
      .patch(`/goals/${goalId}/`, data, {
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
      });
  };

  const handleDelete = () => {
    //consumindo rota de deletar goals
    api
      .delete(`/goals/${goal.id}/`, {
        headers: {
          Authorization: `Bearer  ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        handleChanged();

        handleClose();
      })
      .catch((e) => console.log(e));
  };

  return (
    <Main>
      {errorMsg && (
        <Alert severity="error">
          Sua edição falhou, verifique os dados e tente novamente.
        </Alert>
      )}
      <FormStyled onSubmit={handleSubmit(handleForm)}>
        <div>
          <DivFlex>
            <h1>Titulo: {goal.title}</h1>
            <span>
              <FiTrash onClick={handleDelete} />
            </span>
          </DivFlex>

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
          <h1>Dificuldade: {goal.difficulty}</h1>
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
          <h1>Completo: {goal.how_much_achieved}</h1>
          <InputBase
            className={classes.textField}
            type="number"
            margin="dense"
            variant="outlined"
            placeholder="Progresso"
            name="how_much_achieved"
            inputRef={register}
            error={!!errors.how_much_achieved}
          />
          <FormHelperText className={classes.helper} error={!!errors.email}>
            {errors.how_much_achieved?.message}
          </FormHelperText>
        </div>

        <div>
          <Button type="submit" variant="contained" color="primary">
            Alterar
          </Button>
        </div>
      </FormStyled>
    </Main>
  );
};

export default EditGoal;
