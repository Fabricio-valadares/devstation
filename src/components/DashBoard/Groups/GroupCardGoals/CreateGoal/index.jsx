import api from "../../../../../services";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Input,
  SaveButton,
  SaveIcon,
  BarIcon,
  ErrorIcon,
  IconBox,
  InfoIcon,
  InputBox,
  InputsContainer,
  Main,
} from "../../../CreateHabit/styled";

const CreateGoal = ({ groupId, handleClose }) => {
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
      .catch((error) => console.log(error));
  };

  return (
    <Main>
      <h1>Criar Goal</h1>

      <InputsContainer onSubmit={handleSubmit(handleForm)}>
        <InputBox>
          <IconBox>{errors.title ? <ErrorIcon /> : <InfoIcon />}</IconBox>
          <Input
            name="title"
            ref={register}
            type="text"
            placeholder={
              errors.title ? errors.title.message : "Título do Objetivo"
            }
          />
        </InputBox>

        <InputBox>
          <IconBox>{errors.title ? <ErrorIcon /> : <BarIcon />}</IconBox>
          <Input
            name="difficulty"
            ref={register}
            type="text"
            placeholder={
              errors.difficulty
                ? errors.difficulty.message
                : "Dificuldade do Objetivo"
            }
          />
        </InputBox>
        <InputBox>
          <IconBox>
            <SaveIcon />
          </IconBox>
          <SaveButton type="submit">Salvar Objetivo</SaveButton>
        </InputBox>
      </InputsContainer>
    </Main>
  );
};

export default CreateGoal;
