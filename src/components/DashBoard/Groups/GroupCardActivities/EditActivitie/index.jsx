import { useEffect, useState } from "react";
import api from "../../../../../services";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  DeleteButton,
  DeleteIcon,
  ErrorIcon,
  IconBox,
  InfoIcon,
  Input,
  InputBox,
  InputsContainer,
  Main,
  SaveButton,
  SaveIcon,
} from "../../../EditHabit/styled";
import { toast } from "react-toastify";
import { SkeletonForm } from "../../GroupCardUsers/SkeletonGroup";

const EditActivity = ({ activityId, handleClose }) => {
  const token = localStorage.getItem("token");

  const [activity, setActivity] = useState();

  const schema = yup.object().shape({
    title: yup.string(),
  });

  const { handleSubmit, register, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    api
      .get(`/activities/${activityId}/`)
      .then((response) => setActivity(response.data))
      .catch((e) => console.log(e));
  }, [activityId]);

  const handleForm = (data) => {
    if (data.title === "") {
      data.title = activity.title;
    }

    api
      .patch(`/activities/${activityId}/`, data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then(() => {
        toast.dark(`🚀   Atividade alterada!!`, {
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

  const handleDelete = () => {
    api
      .delete(`/activities/${activity.id}/`, {
        headers: {
          Authorization: `Bearer  ${JSON.parse(token)}`,
        },
      })
      .then(() => {
        toast.dark(`🚀   Atividade deletada!!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        handleClose();
      })
      .catch(() => {
        toast.error(`😵 Ocorreu um erro`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <Main>
      <h1>Editar Atividade</h1>

      {activity ? (
        <>
          <InputsContainer onSubmit={handleSubmit(handleForm)}>
            <InputBox>
              <IconBox>
                {errors.how_much_achieved ? <ErrorIcon /> : <InfoIcon />}
              </IconBox>
              <Input
                name="title"
                ref={register}
                placeholder={
                  errors.title ? errors.title.message : activity.title
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
              <DeleteButton type="button" onClick={handleDelete}>
                Deletar
              </DeleteButton>
            </InputBox>
          </InputsContainer>
        </>
      ) : (
        <SkeletonForm />
      )}
    </Main>
  );
};

export default EditActivity;
