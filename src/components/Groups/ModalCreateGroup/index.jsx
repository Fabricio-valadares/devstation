import { useEffect, useState } from "react";
import api from "../../../services";
import { FormHelperText, InputBase, Button } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { FormStyled } from "./styled";

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

const ModalCreateGroup = () => {
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
        setMessageSuccess(true);
        console.log(response);
      })
      .catch((error) => console.log(error));

    console.log(data);
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
          {/* <FormHelperText>{errors.name?.message}</FormHelperText> */}
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
            {/* <FormHelperText>{errors.description?.message}</FormHelperText> */}
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
          {/* <FormHelperText>{errors.category?.message}</FormHelperText> */}
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
