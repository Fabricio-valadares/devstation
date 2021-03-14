import { Button, FormHelperText, InputBase } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useEffect, useState } from "react";
import api from "../../../../../services";
import EditGoalForm from "../EditGoalForm";
import { Main, useStyles } from "./styled";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const EditGoal = ({ goalId }) => {
  const classes = useStyles();

  const [errorMsg, setErrorMsg] = useState(false);

  const token = localStorage.getItem("token");
  console.log("🚀 ~ file: index.jsx ~ line 18 ~ EditGoal ~ token", token);

  const [goal, setGoal] = useState({});

  const schema = yup.object().shape({
    title: yup.string(),
    difficulty: yup.string(),
    how_much_achieved: yup.string().matches(/\d/, "apenas digitos"),
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
    //consumindo a rota update goal
    if (data.title === "") {
      data.title = goal.title;
    }
    if (data.difficulty === "") {
      data.difficulty = goal.difficulty;
    }
    if (data.how_much_achieved === "") {
      data.how_much_achieved = goal.how_much_achieved;
    }

    api
      .patch(`/goals/${goalId}/`, data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        console.log(response);
        reset();
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
          Sua edição falhou, verifique os dados e tente novamente.
        </Alert>
      )}
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <h1>{goal.title}</h1>
          <h1>{goal.id}</h1>

          <InputBase
            className={classes.textField}
            margin="dense"
            variant="outlined"
            placeholder="Titulo"
            name="title"
            size="medium"
            inputRef={register}
            error={!!errors.title}
          />
          <FormHelperText className={classes.helper} error={!!errors.email}>
            {errors.title?.message}
          </FormHelperText>
        </div>
        <div>
          <h1>{goal.difficulty}</h1>
          <InputBase
            className={classes.textField}
            margin="dense"
            variant="outlined"
            placeholder="Dificuldade"
            name="difficulty"
            size="medium"
            inputRef={register}
            error={!!errors.difficulty}
          />
          <FormHelperText className={classes.helper} error={!!errors.email}>
            {errors.difficulty?.message}
          </FormHelperText>
        </div>
        <div>
          <h1>{goal.how_much_achieved}</h1>
          <InputBase
            className={classes.textField}
            margin="dense"
            variant="outlined"
            placeholder="Progresso"
            name="how_much_achieved"
            size="medium"
            inputRef={register}
            error={!!errors.how_much_achieved}
          />
          <FormHelperText className={classes.helper} error={!!errors.email}>
            {errors.how_much_achieved?.message}
          </FormHelperText>
        </div>

        <div>
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </div>
      </form>
    </Main>
  );
};

export default EditGoal;
