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
  InputStyled,
  TagIcon,
  DescriotionIcon,
  SaveButton,
  Title,
  Message,
} from "./styled";
import { toast } from "react-toastify";

const ModalCreateGroup = ({ groupsData, setGroupsData }) => {
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
        setGroupsData([...groupsData, data]);
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
      <div>
        <Title>Criar um novo grupo</Title>

        <form onSubmit={handleSubmit(dataForm)}>
          <InputBox>
            <IconBox>{errors.name ? <ErrorIcon /> : <InfoIcon />}</IconBox>
            <InputStyled
              name="name"
              inputRef={register}
              placeholder={errors.name ? errors.name.message : "Title"}
              error={!!errors.username}
              variant="outlined"
            />
          </InputBox>
          <InputBox>
            <IconBox>
              {errors.description ? <ErrorIcon /> : <DescriotionIcon />}
            </IconBox>
            <InputStyled
              name="description"
              inputRef={register}
              error={!!errors.description}
              placeholder={
                errors.description ? errors.description.message : "Descrição"
              }
              variant="outlined"
            />
          </InputBox>
          <InputBox>
            <IconBox>{errors.category ? <ErrorIcon /> : <TagIcon />}</IconBox>
            <InputStyled
              name="category"
              inputRef={register}
              error={!!errors.category}
              placeholder={
                errors.category ? errors.category.message : "Categoria"
              }
              variant="outlined"
            />
          </InputBox>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {messageSuccess ? (
              <Message>Grupo cadastrado com sucesso !</Message>
            ) : (
              <SaveButton type="submit">Criar</SaveButton>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default ModalCreateGroup;
