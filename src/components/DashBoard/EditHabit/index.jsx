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
import { toast } from "react-toastify";

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
    title: yup.string(),
    category: yup.string(),
    difficulty: yup.string(),
    frequency: yup.string(),
    how_much_achieved: yup.string().matches(/^[0-9]*$/),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = async (data) => {
    const formData = {
      title: data.title === "" ? habit.title : data.title,
      category: data.category === "" ? habit.category : data.category,
      difficulty: data.difficulty === "" ? habit.difficulty : data.difficulty,
      frequency: data.frequency === "" ? habit.frequency : data.frequency,
      how_much_achieved:
        data.how_much_achieved === ""
          ? habit.how_much_achieved
          : data.how_much_achieved,
      achieved: data.how_much_achieved === 100 ? true : false,
    };

    try {
      await api.patch(`/habits/${habitId}/`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(`🚀   Habito editado!!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      reset();
      close();
    } catch (err) {
      toast.error(`😵 Sua edição falhou `, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(err);
    }
  };

  const deleteHabit = async () => {
    try {
      await api.delete(`/habits/${habitId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.dark(`🚀   Habito deletado!!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      close();
    } catch (err) {
      toast.error(`😵 Habito nao deletado`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
            type="text"
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
          <DeleteButton type="button" onClick={deleteHabit}>
            Deletar
          </DeleteButton>
        </InputBox>
      </InputsContainer>
      <CloseButton onClick={close}>
        <CloseIcon />
      </CloseButton>
    </Main>
  );
};

export default EditHabit;
