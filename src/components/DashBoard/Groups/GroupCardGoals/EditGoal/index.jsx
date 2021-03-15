import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import api from "../../../../../services";

import {
  BarIcon,
  DeleteButton,
  DeleteIcon,
  ErrorIcon,
  FireIcon,
  IconBox,
  InfoIcon,
  Input,
  InputBox,
  InputsContainer,
  Main,
  SaveButton,
  SaveIcon,
} from "../../../EditHabit/styled";

const EditGoal = ({ goalId, handleChanged, handleClose }) => {
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
      .catch((error) => console.log(error));
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
      <h1>Editar Goal</h1>
      <InputsContainer onSubmit={handleSubmit(handleForm)}>
        <InputBox>
          <IconBox>{errors.title ? <ErrorIcon /> : <InfoIcon />}</IconBox>

          <Input
            name="title"
            ref={register}
            type="text"
            placeholder={errors.title ? errors.title.message : goal.title}
          />
        </InputBox>

        <InputBox>
          <IconBox>{errors.category ? <ErrorIcon /> : <BarIcon />}</IconBox>

          <Input
            name="difficulty"
            ref={register}
            type="text"
            placeholder={
              errors.difficulty ? errors.difficulty.message : goal.difficulty
            }
          />
        </InputBox>

        <InputBox>
          <IconBox>{errors.difficulty ? <ErrorIcon /> : <FireIcon />}</IconBox>
          <Input
            name="how_much_achieved"
            ref={register}
            type="number"
            placeholder={
              errors.how_much_achieved
                ? errors.how_much_achieved.message
                : goal.how_much_achieved
            }
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

export default EditGoal;
