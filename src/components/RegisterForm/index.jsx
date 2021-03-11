import { useState } from "react";
import { useHistory } from "react-router";

import { FormContainer, Img, Register, RegisterCard, DivImg } from "./styled";

import { Button, TextField } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import api from "../../services";

const RegisterForm = () => {
  const [errorMsg, setErrorMsg] = useState(false);

  const history = useHistory();
  const required = "Campo obrigatório";

  const schema = yup.object().shape({
    username: yup.string().required(required),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
      )
      .required(required),
    email: yup.string().email("Email Invalido").required(required),
  });

  const { handleSubmit, register, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    api
      .post("/users/", data)
      .then(() => {
        reset();
        history.push("/");
      })
      .catch((error) => {
        setErrorMsg(true);
        setTimeout(() => {
          setErrorMsg(false);
        }, 3000);
        console.log(error);
      });
  };

  return (
    <Register>
      <form onSubmit={handleSubmit(handleForm)}>
        {errorMsg && (
          <Alert severity="error">
            Seu cadastro falhou, verifique os dados e tente novamente.
          </Alert>
        )}
        <RegisterCard>
          <FormContainer>
            <h1>Faça seu cadastro</h1>
            <TextField
              margin="dense"
              variant="outlined"
              label="User"
              name="username"
              size="small"
              color="primary"
              inputRef={register}
              error={!!errors.username}
              helperText={errors.username?.message}
            />
            <TextField
              margin="dense"
              variant="outlined"
              label="Password"
              name="password"
              type="password"
              size="small"
              color="primary"
              inputRef={register}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <TextField
              margin="dense"
              variant="outlined"
              label="Email"
              name="email"
              size="small"
              color="primary"
              inputRef={register}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <div>
              <Button type="submit" variant="contained" color="primary">
                Register
              </Button>
            </div>
          </FormContainer>
          <DivImg></DivImg>
          {/* <Img src={"./assets/register.svg"} alt="Register" /> */}
        </RegisterCard>
      </form>
    </Register>
  );
};

export default RegisterForm;
