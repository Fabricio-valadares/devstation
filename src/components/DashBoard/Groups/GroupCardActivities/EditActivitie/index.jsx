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

const EditActivity = ({ activityId, handleChanged, handleClose }) => {
  const classes = useStyles();

  const [errorMsg, setErrorMsg] = useState(false);

  const token = localStorage.getItem("token");

  const [activity, setActivity] = useState({});

  const schema = yup.object().shape({
    title: yup.string(),
  });

  const { handleSubmit, register, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    //consumindo rota get one activity
    api
      .get(`/activities/${activityId}/`)
      .then((response) => setActivity(response.data))
      .catch((e) => console.log(e));
  }, [activityId]);

  const handleForm = (data) => {
    if (data.title === "") {
      data.title = activity.title;
    }

    //consumindo a rota update activity

    api
      .patch(`/activities/${activityId}/`, data, {
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

  const handleDelete = () => {
    //consumindo rota de deletar activity
    api
      .delete(`/activities/${activity.id}/`, {
        headers: {
          Authorization: `Bearer  ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        // handleChanged();
        handleClose();
        console.log(response);
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
            <h1>Titulo: {activity.title}</h1>
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
        <>
          <Button type="submit" variant="contained" color="primary">
            Alterar
          </Button>
        </>
      </FormStyled>
    </Main>
  );
};

export default EditActivity;
