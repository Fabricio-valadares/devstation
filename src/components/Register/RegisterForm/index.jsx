import { useState } from "react";

import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BsCodeStyled } from "./styled";
import {
  FormContainer,
  Img,
  RegisterCard,
  StyledSpan,
  useStyles,
} from "./styled";

import { Button, FormHelperText, InputBase } from "@material-ui/core";

import api from "../../../services";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const [viewIcon, setViewIcon] = useState(false);

  const classes = useStyles();

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
    setViewIcon(true);

    api
      .post("/users/", data)
      .then(() => {
        setViewIcon(false);
        toast.success(`🚀 Registro completo, bora fazer login ?`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        reset();
        history.push("/login");
      })
      .catch((error) => {
        setViewIcon(false);
        toast.error(`😵 Seu registro falhou `, {
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
    <>
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
              {!viewIcon ? "Register" : <BsCodeStyled size={27} />}
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
