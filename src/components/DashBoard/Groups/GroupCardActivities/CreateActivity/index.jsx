import api from "../../../../../services";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  IconBox,
  InfoIcon,
  Input,
  InputBox,
  InputsContainer,
  Main,
  SaveButton,
  SaveIcon,
  ErrorIcon,
} from "../../../CreateHabit/styled";
import { toast } from "react-toastify";

const CreateActivity = ({ groupId, handleClose }) => {
  const token = localStorage.getItem("token");

  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
  });

  const { handleSubmit, register, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    data["group"] = groupId;
    data["realization_time"] = "2021-03-10T15:00:00Z";

    api
      .post(`/activities/`, data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then(() => {
        toast.dark(`🚀   Atividade criada!!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        reset();
        handleClose();
      })
      .catch((error) => {
        toast.error(`😵 Ocorreu um erro`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        console.log(error);
      });
  };

  return (
    <Main>
      <h1>Criar Atividade</h1>

      <InputsContainer onSubmit={handleSubmit(handleForm)}>
        <InputBox>
          <IconBox>{errors.title ? <ErrorIcon /> : <InfoIcon />}</IconBox>
          <Input
            name="title"
            type="text"
            ref={register}
            placeholder={
              errors.title ? errors.title.message : "Título da Atividade"
            }
          />
        </InputBox>

        <InputBox>
          <IconBox>
            <SaveIcon />
          </IconBox>
          <SaveButton type="submit">Salvar Atividade</SaveButton>
        </InputBox>
      </InputsContainer>
    </Main>
  );
};

export default CreateActivity;
