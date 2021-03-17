import { useState } from "react";
import api from "../../../services";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import {
  InputBox,
  IconBox,
  ErrorIcon,
  InfoIcon,
  TagIcon,
  DescriotionIcon,
  SaveButton,
  Input,
  Main,
  InputsContainer,
  Message,
  SaveIcon,
  CloseButton,
  CloseIcon,
} from "./styled";
import { toast } from "react-toastify";

const ModalCreateGroup = ({ close }) => {
  const [messageSuccess, setMessageSuccess] = useState(false);

  const token = JSON.parse(localStorage.getItem("token"));

  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    description: yup.string().required("Campo Obrigatório"),
    category: yup.string().required("Campo Obrigatório"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const dataForm = (data) => {
    reset();

    api
      .post(`/groups/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        toast.dark(`🚀   Grupo criado com sucesso!!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setMessageSuccess(true);
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
    <>
      <Main>
        <h1>Criar um novo grupo</h1>

        <InputsContainer onSubmit={handleSubmit(dataForm)}>
          <InputBox>
            <IconBox>{errors.name ? <ErrorIcon /> : <InfoIcon />}</IconBox>
            <Input
              name="name"
              ref={register}
              type="text"
              placeholder={errors.name ? errors.name.message : "Nome do grupo"}
            />
          </InputBox>
          <InputBox>
            <IconBox>
              {errors.description ? <ErrorIcon /> : <DescriotionIcon />}
            </IconBox>
            <Input
              name="description"
              ref={register}
              type="text"
              placeholder={
                errors.description
                  ? errors.description.message
                  : "Breve descrição do grupo"
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
                errors.category ? errors.category.message : "Categoria do grupo"
              }
            />
          </InputBox>

          {messageSuccess ? (
            <Message>Grupo cadastrado com sucesso !</Message>
          ) : (
            <InputBox>
              <IconBox>
                <SaveIcon />
              </IconBox>
              <SaveButton type="submit">Salvar hábito</SaveButton>
            </InputBox>
          )}
        </InputsContainer>
        <CloseButton onClick={close}>
          <CloseIcon />
        </CloseButton>
      </Main>
    </>
  );
};

export default ModalCreateGroup;
