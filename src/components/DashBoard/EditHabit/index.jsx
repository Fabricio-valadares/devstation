import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../../services";

import {
  Main,
  InputsContainer,
  InputBox,
  IconBox,
  InfoIcon,
  Input,
  TagIcon,
  BarIcon,
  FrequencyIcon,
  FireIcon,
  SaveIcon,
  SaveButton,
  ErrorIcon,
  CloseButton,
  CloseIcon,
  DeleteButton,
  DeleteIcon,
} from "./styled";

const EditHabit = ({ close, token, habitId }) => {
  const [habit, setHabit] = useState(async () => {
    try {
      const response = await api.get(`/habits/${habitId}/`);
      setHabit(response.data);
    } catch (err) {
      console.log(err);
    }
  });

  const schema = yup.object().shape({
    title: yup.string().required("Defina um título"),
    category: yup.string().required("Defina uma categoria"),
    difficulty: yup.string().required("Defina uma dificuldade"),
    frequency: yup.string().required("Defina sua frequência"),
    how_much_achieved: yup
      .number()
      .positive()
      .integer()
      .required("Defina quanto já evoluiu nesse hábito"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = async (data) => {
    const formData = {
      ...data,
      achieved: data.how_much_achieved === 100 ? true : false,
    };

    try {
      await api.patch(`/habits/${habitId}/`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      reset();
      close();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteHabit = async () => {
    try {
      await api.delete(`/habits/${habitId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      close();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Main>
      <h1>Editar hábito</h1>

      <InputsContainer onSubmit={handleSubmit(handleForm)}>
        <InputBox>
          <IconBox>{errors.title ? <ErrorIcon /> : <InfoIcon />}</IconBox>
          <Input
            name="title"
            ref={register}
            type="text"
            placeholder={errors.title ? errors.title.message : habit.title}
          />
        </InputBox>
        <InputBox>
          <IconBox>{errors.category ? <ErrorIcon /> : <TagIcon />}</IconBox>
          <Input
            name="category"
            ref={register}
            type="text"
            placeholder={
              errors.category ? errors.category.message : habit.category
            }
          />
        </InputBox>
        <InputBox>
          <IconBox>{errors.difficulty ? <ErrorIcon /> : <BarIcon />}</IconBox>
          <Input
            name="difficulty"
            ref={register}
            type="text"
            placeholder={
              errors.difficulty ? errors.difficulty.message : habit.difficulty
            }
          />
        </InputBox>
        <InputBox>
          <IconBox>
            {errors.frequency ? <ErrorIcon /> : <FrequencyIcon />}
          </IconBox>
          <Input
            name="frequency"
            ref={register}
            type="text"
            placeholder={
              errors.frequency ? errors.frequency.message : habit.frequency
            }
          />
        </InputBox>
        <InputBox>
          <IconBox>
            {errors.how_much_achieved ? <ErrorIcon /> : <FireIcon />}
          </IconBox>
          <Input
            name="how_much_achieved"
            ref={register}
            type="number"
            placeholder={
              errors.how_much_achieved
                ? errors.how_much_achieved.message
                : habit.how_much_achieved
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
          <DeleteButton onClick={deleteHabit}>Deletar</DeleteButton>
        </InputBox>
      </InputsContainer>
      <CloseButton onClick={close}>
        <CloseIcon />
      </CloseButton>
    </Main>
  );
};

export default EditHabit;
