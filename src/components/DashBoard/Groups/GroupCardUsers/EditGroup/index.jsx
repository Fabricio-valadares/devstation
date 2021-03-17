import { useEffect, useState } from "react";

import api from "../../../../../services";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  ErrorIcon,
  IconBox,
  InfoIcon,
  Input,
  InputBox,
  InputsContainer,
  Main,
  SaveButton,
  SaveIcon,
  TagIcon,
} from "../../../EditHabit/styled";

import { FiActivity } from "react-icons/fi";
import { toast } from "react-toastify";
import { SkeletonForm } from "../SkeletonGroup";

const EditGroup = ({ groupId, handleClose }) => {
  const token = localStorage.getItem("token");

  const [group, setGroup] = useState();

  const schema = yup.object().shape({});

  const { handleSubmit, register, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    api
      .get(`/groups/${groupId}/`)
      .then((response) => setGroup(response.data))
      .catch((e) => console.log(e));
  }, [groupId]);

  const handleForm = (data) => {
    data["id"] = groupId;
    data["users"] = group.users;

    if (data.name === "") {
      data.name = group.name;
    }
    if (data.description === "") {
      data.description = group.description;
    }
    if (data.category === "") {
      data.category = group.category;
    }

    api
      .patch(`/groups/${groupId}/`, data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then(() => {
        toast.success(`🚀  Grupo editado!!`, {
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
      <h1>Editar Grupo</h1>
      {group ? (
        <InputsContainer onSubmit={handleSubmit(handleForm)}>
          <InputBox>
            <IconBox>{errors.title ? <ErrorIcon /> : <InfoIcon />}</IconBox>
            <Input
              name="name"
              ref={register}
              type="text"
              placeholder={errors.name ? errors.name.message : group.name}
            />
          </InputBox>

          <InputBox>
            <IconBox>{errors.title ? <ErrorIcon /> : <TagIcon />}</IconBox>
            <Input
              name="description"
              ref={register}
              type="text"
              placeholder={
                errors.description
                  ? errors.description.message
                  : group.description
              }
            />
          </InputBox>

          <InputBox>
            <IconBox>{errors.title ? <ErrorIcon /> : <FiActivity />}</IconBox>

            <Input
              name="category"
              ref={register}
              type="text"
              placeholder={
                errors.category ? errors.category.message : group.category
              }
            />
          </InputBox>

          <InputBox>
            <IconBox>
              <SaveIcon />
            </IconBox>
            <SaveButton type="submit">Atualizar</SaveButton>
          </InputBox>
        </InputsContainer>
      ) : (
        <SkeletonForm />
      )}
    </Main>
  );
};

export default EditGroup;
