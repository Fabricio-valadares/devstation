import { useEffect, useState } from "react";
import api from "../../../../../services";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  DeleteButton,
  DeleteIcon,
  ErrorIcon,
  IconBox,
  InfoIcon,
  Input,
  InputBox,
  InputsContainer,
  Main,
  SaveButton,
  SaveIcon,
} from "../../../EditHabit/styled";

const EditActivity = ({ activityId, handleClose }) => {
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
      .catch((error) => console.log(error));
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
        handleClose();
        console.log(response);
      })
      .catch((e) => console.log(e));
  };

  return (
    <Main>
      <h1>Editar Atividade</h1>
      <InputsContainer onSubmit={handleSubmit(handleForm)}>
        <InputBox>
          <IconBox>
            {errors.how_much_achieved ? <ErrorIcon /> : <InfoIcon />}
          </IconBox>
          <Input
            name="title"
            ref={register}
            placeholder={errors.title ? errors.title.message : activity.title}
          />
        </InputBox>

        <InputBox>
          <IconBox>
            <SaveIcon />
          </IconBox>
          <SaveButton type="submit">Atualizar</SaveButton>
        </InputBox>
        <InputBox>
          <IconBox>
            <DeleteIcon />
          </IconBox>
          <DeleteButton onClick={handleDelete}>Deletar</DeleteButton>
        </InputBox>
      </InputsContainer>
    </Main>
  );
};

export default EditActivity;
