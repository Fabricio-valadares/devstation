import { useState } from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  FormContainer,
  Img,
  RegisterCard,
  StyledSpan,
  useStyles,
} from "./styled";

import { Button, FormHelperText, InputBase } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import api from "../../../services";

const RegisterForm = () => {
  const classes = useStyles();

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
        history.push("/login");
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
    <>
      {errorMsg && (
        <Alert severity="error">
          Seu cadastro falhou, verifique os dados e tente novamente.
        </Alert>
      )}
      <RegisterCard onSubmit={handleSubmit(handleForm)}>
        <FormContainer>
          <h1>Faça seu cadastro</h1>
          <InputBase
            className={classes.textField}
            margin="dense"
            variant="outlined"
            placeholder="Usuario"
            name="username"
            size="medium"
            inputRef={register}
            error={!!errors.username}
          />
          <FormHelperText className={classes.helper} error={!!errors.email}>
            {errors.username?.message}
          </FormHelperText>
          <InputBase
            className={classes.textField}
            margin="dense"
            variant="outlined"
            placeholder="Senha"
            name="password"
            type="password"
            inputRef={register}
            error={!!errors.password}
          />
          <FormHelperText className={classes.helper} error={!!errors.email}>
            {errors.password?.message}
          </FormHelperText>
          <InputBase
            className={classes.textField}
            margin="dense"
            variant="outlined"
            placeholder="Email"
            name="email"
            size="medium"
            inputRef={register}
            error={!!errors.email}
          />
          <FormHelperText className={classes.helper} error={!!errors.email}>
            {errors.email?.message}
          </FormHelperText>
          <div>
            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
          </div>
          <StyledSpan onClick={() => history.push("/login")}>
            Faça login
          </StyledSpan>
        </FormContainer>
        <Img src={"./assets/register.svg"} alt="Register" />
      </RegisterCard>
    </>
  );
};

export default RegisterForm;
