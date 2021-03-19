import React from "react";
import { useHistory } from "react-router-dom";
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
  SaveIcon,
  SaveButton,
  ErrorIcon,
  CloseButton,
  CloseIcon,
} from "./styled";
import { toast } from "react-toastify";

const CreateHabit = ({ userId, close, token }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    title: yup.string().required("Defina um título"),
    category: yup.string().required("Defina uma categoria"),
    difficulty: yup.string().required("Defina uma dificuldade"),
    frequency: yup.string().required("Defina sua frequência"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = async (data) => {
    const formData = {
      ...data,
      achieved: false,
      user: userId,
      how_much_achieved: 1,
    };

    try {
      await api.post("/habits/", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.dark(`🚀   Habito cadastrado!!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      reset();
      history.push("/dashboard");
      close();
    } catch (err) {
      toast.error(`😵 Seu cadastro falhou `, {
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
      <h1>Adicione um novo hábito</h1>

      <InputsContainer onSubmit={handleSubmit(handleForm)}>
        <InputBox>
          <IconBox>{errors.title ? <ErrorIcon /> : <InfoIcon />}</IconBox>
          <Input
            name="title"
            ref={register}
            type="text"
            placeholder={
              errors.title ? errors.title.message : "Título do hábito"
            }
          />
        </InputBox>
        <InputBox>
          <IconBox>{errors.category ? <ErrorIcon /> : <TagIcon />}</IconBox>
          <Input
            name="category"
            ref={register}
            type="text"
            placeholder={
              errors.category ? errors.category.message : "Categoria do hábito"
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
              errors.difficulty
                ? errors.difficulty.message
                : "Dificuldade do hábito"
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
              errors.frequency
                ? errors.frequency.message
                : "Frequência do hábito"
            }
          />
        </InputBox>

        <InputBox>
          <IconBox>
            <SaveIcon />
          </IconBox>
          <SaveButton type="submit">Salvar hábito</SaveButton>
        </InputBox>
      </InputsContainer>
      <CloseButton onClick={close}>
        <CloseIcon />
      </CloseButton>
    </Main>
  );
};

export default CreateHabit;
